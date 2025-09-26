import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { Throttle } from '@nestjs/throttler';

// services
import { AuthService } from './auth.service';

// dto
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';

// decorators
import { Auth } from './decorators/auth.decorator';
import { User } from 'src/common/decorators/user.decorator';

// guards
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';

// utils
import { getDeviceInfo } from 'src/utils/deviceInfo';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post('register')
  @Throttle({ default: { limit: 3, ttl: 60000 } })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  @Throttle({ default: { limit: 3, ttl: 60000 } })
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    const { accessToken, refreshToken, userId } =
      await this.authService.login(dto);

    const xff = req.headers['x-forwarded-for'];
    const ipRaw = Array.isArray(xff) ? xff[0] : xff || req.ip || '';
    const ip =
      (typeof ipRaw === 'string'
        ? ipRaw.split(',')[0].trim()
        : String(ipRaw)) || 'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    const { os, deviceType, browser } = getDeviceInfo(userAgent);

    await this.authService.createSession({
      userId,
      refreshToken,
      ipAddress: ip === '::1' ? '127.0.0.1' : String(ip),
      userAgent,
      os,
      deviceType,
      browser,
      expiresAt: new Date(
        Date.now() +
          parseInt(this.configService.get<string>('JWT_REFRESH_EXPIRY')!),
      ),
    });

    const isProd = this.configService.get<string>('NODE_ENV') === 'production';

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? 'strict' : 'lax',
      maxAge: isProd
        ? parseInt(this.configService.get<string>('JWT_ACCESS_EXPIRY')!)
        : 30 * 24 * 60 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: isProd,
      sameSite: isProd ? 'strict' : 'lax',
      maxAge: parseInt(this.configService.get<string>('JWT_REFRESH_EXPIRY')!),
    });

    return { message: 'Login successful' };
  }

  @Post('change-password')
  @HttpCode(200)
  @Auth()
  async changePassword(@User() userId: string, @Body() dto: ChangePasswordDto) {
    await this.authService.changePassword(userId, dto);
    return { message: 'Password has been successfully changed' };
  }

  @Post('forgot-password')
  @Throttle({ default: { limit: 3, ttl: 300000 } })
  @HttpCode(200)
  async forgotPassword(@Body('email') email: string) {
    await this.authService.sendPasswordForgotLink(email);
    return { message: 'Reset password mail has been send' };
  }

  @Post('reset-password')
  @Throttle({ default: { limit: 1, ttl: 60000 } })
  @HttpCode(200)
  async resetPassword(@Body() dto: ResetPasswordDto) {
    await this.authService.resetPassword(dto);
    return { message: 'Reset is successful' };
  }

  @Post('logout')
  @Throttle({ default: { limit: 5, ttl: 60000 } })
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
  @Throttle({ default: { limit: 5, ttl: 60000 } })
  @HttpCode(200)
  @Auth()
  async logoutAll(
    @Res({ passthrough: true }) res: Response,
    @User() userId: string,
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
    @User() userId: string,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      const { accessToken, refreshToken } =
        await this.authService.refreshTokens(userId, req.cookies?.refreshToken);

      const isProd =
        this.configService.get<string>('NODE_ENV') === 'production';

      res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: isProd ? 'strict' : 'lax',
        maxAge: isProd
          ? parseInt(this.configService.get<string>('JWT_ACCESS_EXPIRY')!)
          : 30 * 24 * 60 * 60 * 1000,
      });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: isProd,
        sameSite: isProd ? 'strict' : 'lax',
        maxAge: parseInt(this.configService.get<string>('JWT_REFRESH_EXPIRY')!),
      });

      return { message: 'Refresh successful' };
    } catch (err) {
      throw err;
    }
  }

  @Get('sessions')
  @Auth()
  async getSessions(@User('sub') userId: string, @Req() req: Request) {
    const refreshToken = req.cookies['refreshToken'];

    return this.authService.getSessions(userId, refreshToken);
  }

  @Delete('sessions/:id')
  @Auth()
  async deleteSession(@Param('id') sessionId: string) {
    await this.authService.removeSession(sessionId);
    return { message: 'Session deleted successfully' };
  }
}
