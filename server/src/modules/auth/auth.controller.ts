import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

// services
import { AuthService } from './auth.service';

// dto
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

// decorators
import { Auth } from './decorators/auth.decorator';
import { User } from 'src/common/decorators/user.decorator';

// guards
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { getDeviceInfo } from 'src/utils/deviceInfo';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    const { accessToken, refreshToken, userId } =
      await this.authService.login(dto);

    const ip = req.ip || req.headers['x-forwarded-for'];
    const userAgent = req.headers['user-agent'] || 'unknown';

    const { os, deviceType, browser } = getDeviceInfo(userAgent);

    await this.authService.createSession({
      userId,
      refreshToken,
      ipAddress: String(ip),
      userAgent,
      os,
      deviceType,
      browser,
      expiresAt: new Date(
        Date.now() +
          parseInt(this.configService.get<string>('JWT_REFRESH_EXPIRY')!),
      ),
    });

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge:
        this.configService.get<string>('NODE_ENV') === 'production'
          ? parseInt(this.configService.get<string>('JWT_ACCESS_EXPIRY')!)
          : 30 * 24 * 60 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: parseInt(this.configService.get<string>('JWT_REFRESH_EXPIRY')!),
    });

    return { message: 'Login successful' };
  }

  @Post('logout')
  @HttpCode(200)
  async logout(@Res({ passthrough: true }) res: Response, @Req() req: Request) {
    const refreshToken = req.cookies['refreshToken'];

    res.cookie('accessToken', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 0,
    });

    res.cookie('refreshToken', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 0,
    });

    await this.authService.logout(refreshToken);

    return { message: 'Successfully logged out' };
  }

  @Post('logout-all')
  @HttpCode(200)
  @Auth()
  async logoutAll(
    @Res({ passthrough: true }) res: Response,
    @User('sub') userId: string,
  ) {
    res.cookie('accessToken', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 0,
    });

    res.cookie('refreshToken', '', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 0,
    });

    await this.authService.logoutAll(userId);

    return { message: 'Successfully logged out from all sessions' };
  }

  @Post('refresh')
  @UseGuards(JwtRefreshGuard)
  async refresh(
    @User('sub') userId: string,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { accessToken, refreshToken } = await this.authService.refreshTokens(
      userId,
      req.cookies?.refreshToken,
    );

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge:
        this.configService.get<string>('NODE_ENV') === 'production'
          ? parseInt(this.configService.get<string>('JWT_ACCESS_EXPIRY')!)
          : 30 * 24 * 60 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: parseInt(this.configService.get<string>('JWT_REFRESH_EXPIRY')!),
    });

    return { message: 'Refresh successful' };
  }
}
