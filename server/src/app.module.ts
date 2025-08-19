import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './modules/movie/movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    AuthModule,
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
