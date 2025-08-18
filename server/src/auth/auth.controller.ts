import { Body, Controller, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ConfigService } from '@nestjs/config';

// services
import { AuthService } from './auth.service';

// dto
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  private readonly JWT_ACCESS_EXPIRY = 15 * 60 * 1000;
  private readonly JWT_REFRESH_EXPIRY = 7 * 24 * 60 * 60 * 1000;

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

    await this.authService.createSession({
      userId,
      refreshToken: refreshToken,
      ipAddress: String(ip),
      userAgent,
      expiresAt: new Date(Date.now() + this.JWT_REFRESH_EXPIRY),
    });

    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge:
        this.configService.get<string>('NODE_ENV') === 'production'
          ? this.JWT_ACCESS_EXPIRY
          : 30 * 24 * 60 * 60 * 1000,
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: this.JWT_REFRESH_EXPIRY,
    });

    return { message: 'Login successful' };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
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

    return this.authService.logout(refreshToken);
  }

  @Post('logout-all')
  @UseGuards(JwtAuthGuard)
  async logoutAll(
    @Res({ passthrough: true }) res: Response,
    @Req() req: Request,
  ) {
    console.log(req.user.sub);
    // res.cookie('accessToken', '', {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: 'strict',
    //   maxAge: 0,
    // });

    // res.cookie('refreshToken', '', {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: 'strict',
    //   maxAge: 0,
    // });

    return req.user;
  }
}
