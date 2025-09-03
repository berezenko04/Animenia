import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// service
import { PrismaService } from 'src/prisma/prisma.service';

// dto
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { CreateSessionDto } from './dto/create-session.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
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
