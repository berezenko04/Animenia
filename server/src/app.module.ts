import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AuthModule } from './modules/auth/auth.module';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './modules/upload/upload.module';
import { MailModule } from './modules/mailer/mailer.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { LogService } from './common/logging/log.service';
import { AllExceptionsFilter } from './common/filters/all-exception.filter';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        `.env.${process.env.NODE_ENV || 'development'}`,
        '.env.development',
        '.env',
      ],
    }),
    ThrottlerModule.forRoot({ throttlers: [{ ttl: 60000, limit: 100 }] }),
    PrismaModule,
    AuthModule,
    UserModule,
    MovieModule,
    UploadModule,
    MailModule,
  ],
  controllers: [],
  providers: [
    LogService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
