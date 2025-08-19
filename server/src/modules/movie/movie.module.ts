import { Module } from '@nestjs/common';

// controllers
import { MovieController } from './movie.controller';

// services
import { MovieService } from './movie.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, PrismaService],
})
export class MovieModule {}
