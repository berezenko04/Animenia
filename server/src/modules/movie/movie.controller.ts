import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

// services
import { MovieService } from './movie.service';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('all')
  async all(@Query() query: PaginationDto) {
    return this.movieService.all(query);
  }

  @Get(':id')
  async get(@Param() movieId: string) {
    return this.movieService.get(movieId);
  }

  @Post('create')
  async create(@Body() dto: CreateMovieDto) {
    await this.movieService.create(dto);
    return { message: 'Movie is successfully created' };
  }
}
