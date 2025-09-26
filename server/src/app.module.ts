import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { UploadModule } from './modules/upload/upload.module';
import { MailModule } from './modules/mailer/mailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    PrismaModule,
    AuthModule,
    UserModule,
    MovieModule,
    UploadModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
