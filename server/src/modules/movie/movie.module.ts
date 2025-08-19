import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

// controllers
import { MovieController } from './movie.controller';

// services
import { MovieService } from './movie.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, PrismaService, JwtService],
})
export class MovieModule {}
