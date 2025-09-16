import {
  ConflictException,
  Injectable,
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



@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly userService: UserService,
    private readonly mailerService: MailerService
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
    const { email, password, firstName, lastName } = dto;

    const existingUser = await this.prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
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

    return { id: user.id, email: user.email };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.validateUser(email, password);
    if (!user) throw new UnauthorizedException('Invalid email or password');

    const tokens = await this.generateTokens(user.id);

    return { ...tokens, userId: user.id };
  }

  async changePassword(userId: string, dto: ChangePasswordDto) {
    await this.userService.get({id: userId});

    const password = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { hash: true },
    });

    const isPasswordValid = await bcrypt.compare(
      dto.currentPassword,
      password!.hash,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException("Current password doesn't match");
    }

    const newPasswordHash = await bcrypt.hash(dto.newPassword, 10);

    await this.prisma.user.update({
      where: { id: userId },
      data: { hash: newPasswordHash },
    });
  }

  async sendPasswordForgotLink(email: string){
    const user = await this.userService.get({email})

    const token = randomUUID();

    await this.prisma.passwordReset.create({ data: {userId: user.id, hash: token, expiresAt: new Date(Date.now() + 1000 * 60 * 30) }})

    const url = `${this.configService.get<string>("FRONTEND_URL")}/reset-password?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      subject: 'Reset password',
      template: 'forgot-password',
      context: {
        url
      }
    })
  }

  async resetPassword(dto: ResetPasswordDto){
    const resetData = await this.prisma.passwordReset.findFirst({where: { hash: dto.token, expiresAt: {  gte: new Date() }, used: false }})

    if(!resetData) throw new UnauthorizedException('Invalid or expired reset token')

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
    }
  }

  async logoutAll(userId: string) {
    return this.prisma.session.deleteMany({ where: { userId } });
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
