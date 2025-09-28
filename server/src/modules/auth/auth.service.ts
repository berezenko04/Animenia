import {
  ConflictException,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { randomUUID } from 'crypto';
import { MailerService } from '@nestjs-modules/mailer';

// service
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from '../user/user.service';

// dto
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { CreateSessionDto } from './dto/create-session.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { LogService } from 'src/common/logging/log.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly mailerService: MailerService,
    private readonly logService: LogService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) return null;

    const isValid = await bcrypt.compare(password, user.hash);
    if (!isValid) return null;

    return user;
  }

  private async generateTokens(userId: string) {
    const payload = { sub: userId };
    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
      expiresIn: '15m',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  async createSession(data: CreateSessionDto) {
    return this.prisma.session.create({ data });
  }

  async removeSession(sessionId: string) {
    return this.prisma.session.delete({ where: { id: sessionId } });
  }

  async register(dto: RegisterDto) {
    this.logger.log(`Register attempt with email: ${dto.email}`);
    const { email, password, firstName, lastName } = dto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      this.logger.error('User with this email already exists');

      await this.logService.write({
        level: 'ERROR',
        action: 'auth.register',
        status: 'fail',
        message: 'User already exists',
        metadata: { dto },
      });

      throw new ConflictException('User with this email already exists');
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        hash,
        firstName,
        lastName,
      },
    });

    this.logger.log(`Registration successful with email: ${user.email}`);
    await this.logService.write({
      level: 'INFO',
      action: 'auth.register',
      userId: user.id,
      status: 'success',
    });

    return { id: user.id, email: user.email };
  }

  async login({ email, password }: LoginDto) {
    this.logger.log(`Login attempt: ${email}`);

    const user = await this.validateUser(email, password);
    if (!user) {
      this.logger.warn(`Login failed: ${email}`);

      await this.logService.write({
        level: 'SECURITY',
        action: 'auth.login',
        status: 'fail',
        message: 'Invalid credentials',
        metadata: { email },
      });

      throw new UnauthorizedException('Invalid email or password');
    }

    const tokens = await this.generateTokens(user.id);

    this.logger.log(`Login success: ${user.id}`);
    await this.logService.write({
      level: 'INFO',
      action: 'auth.login',
      userId: user.id,
      status: 'success',
    });

    return { ...tokens, userId: user.id };
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    this.logger.log(`Change Password attempt: ${userId}`);

    await this.userService.get(userId);

    const password = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { hash: true },
    });

    const isPasswordValid = await bcrypt.compare(
      dto.currentPassword,
      password!.hash,
    );

    if (!isPasswordValid) {
      await this.logService.write({
        level: 'SECURITY',
        action: 'auth.changePassword',
        status: 'fail',
        message: 'Invalid credentials',
        userId,
      });
      throw new UnauthorizedException("Current password doesn't match");
    }

    const newPasswordHash = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { hash: newPasswordHash },
    });

    this.logger.log(`Change password success: ${userId}`);
    await this.logService.write({
      level: 'INFO',
      action: 'auth.changePassword',
      userId,
      status: 'success',
    });
  }

  async sendPasswordForgotLink(email: string) {
    this.logger.log(`Password reset request: ${email}`);

    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      this.logger.warn(
        `Password reset request for non-existent user: ${email}`,
      );
      return;
    }

    const token = randomUUID();

    await this.prisma.passwordReset.deleteMany({
      where: { userId: user.id, used: false },
    });

    await this.prisma.passwordReset.create({
      data: {
        userId: user.id,
        hash: token,
        expiresAt: new Date(Date.now() + 1000 * 60 * 30),
      },
    });

    console.log(this.configService.get('FRONTEND_URL'));

    const url = `${this.configService.get<string>('FRONTEND_URL')}/reset-password?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Reset password',
      template: 'forgot-password',
      context: {
        url,
      },
    });

    this.logger.log(`Password reset email sent: ${user.id}`);
    await this.logService.write({
      level: 'INFO',
      action: 'auth.forgotPassword',
      userId: user.id,
      status: 'success',
    });
  }

  async resetPassword(dto: ResetPasswordDto) {
    this.logger.log(
      `Password reset attempt with token: ${dto.token.substring(0, 8)}...`,
    );

    const resetData = await this.prisma.passwordReset.findFirst({
      where: { hash: dto.token, expiresAt: { gte: new Date() }, used: false },
    });

    if (!resetData) {
      this.logger.warn(
        `Invalid or expired reset token: ${dto.token.substring(0, 8)}...`,
      );
      await this.logService.write({
        level: 'SECURITY',
        action: 'auth.resetPassword',
        status: 'fail',
        message: 'Invalid or expired reset token',
      });
      throw new UnauthorizedException('Invalid or expired reset token');
    }

    const newPasswordHash = await bcrypt.hash(dto.password, 10);

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: resetData.userId },
        data: { hash: newPasswordHash },
      }),
      this.prisma.passwordReset.update({
        where: { id: resetData.id },
        data: { used: true },
      }),
    ]);

    this.logger.log(`Password reset successful: ${resetData.userId}`);
    await this.logService.write({
      level: 'INFO',
      action: 'auth.resetPassword',
      userId: resetData.userId,
      status: 'success',
    });
  }

  async logout(refreshToken: string) {
    if (!refreshToken) {
      return;
    }

    const session = await this.prisma.session.findUnique({
      where: { refreshToken },
    });

    if (session) {
      await this.prisma.session.delete({ where: { refreshToken } });
      this.logger.log(`Logout is succesful for User: ${session.userId}`);
      await this.logService.write({
        level: 'INFO',
        action: 'auth.logout',
        userId: session.userId,
        status: 'success',
      });
    }
  }

  async logoutAll(userId: string) {
    this.logger.log(`Logout all sessions attempt User: ${userId}`);
    await this.prisma.session.deleteMany({ where: { userId } });
    this.logger.log(`Logout all sessions is successful User: ${userId}`);
    await this.logService.write({
      level: 'INFO',
      action: 'auth.logoutAll',
      userId,
      message: 'success',
    });
  }

  async refreshTokens(userId: string, oldRefreshToken: string) {
    const session = await this.prisma.session.findUnique({
      where: { refreshToken: oldRefreshToken },
    });

    if (!session || session.userId !== userId) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const { accessToken, refreshToken } = await this.generateTokens(userId);

    await this.prisma.session.update({
      where: { id: session.id },
      data: {
        refreshToken,
        expiresAt: new Date(
          Date.now() +
            parseInt(this.configService.get<string>('JWT_REFRESH_EXPIRY')!),
        ),
      },
    });

    return { accessToken, refreshToken };
  }

  async getSessions(userId: string, currentRefreshToken: string) {
    const sessions = await this.prisma.session.findMany({
      where: { userId, expiresAt: { gt: new Date() } },
      select: {
        id: true,
        deviceType: true,
        os: true,
        ipAddress: true,
        browser: true,
        userAgent: true,
        refreshToken: true,
        createdAt: true,
      },
      take: 5,
    });

    return sessions.map(({ refreshToken, ...s }) => ({
      ...s,
      isCurrent: refreshToken === currentRefreshToken,
    }));
  }
}
