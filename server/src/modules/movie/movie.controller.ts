import { Controller, Get, Param, Query } from '@nestjs/common';

// services
import { MovieService } from './movie.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('all')
  async all(@Query() dto: PaginationDto) {
    return this.movieService.all(dto);
  }

  @Get(':id')
  async get(@Param() movieId: string) {
    return this.movieService.get(movieId);
  }
}
