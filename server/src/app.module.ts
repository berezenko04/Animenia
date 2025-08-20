import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { MovieModule } from './modules/movie/movie.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { WishlistModule } from './modules/wishlist/wishlist.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    PrismaModule,
    AuthModule,
    UserModule,
    MovieModule,
    WishlistModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
