import { Module } from '@nestjs/common';

// controllers
import { MovieController } from './movie.controller';

// services
import { MovieService } from './movie.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
