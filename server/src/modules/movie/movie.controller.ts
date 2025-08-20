import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

// services
import { MovieService } from './movie.service';

// dto
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

// decorators
import { User } from 'src/common/decorators/user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get('all')
  async all(@Query() query: PaginationDto) {
    return this.movieService.all(query);
  }

  @Get(':id')
  async get(@Param('id') movieId: string) {
    return this.movieService.get(movieId);
  }

  @Auth()
  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateMovieDto) {
    await this.movieService.create(dto);
    return { message: 'Movie is successfully created' };
  }

  @Auth()
  @Patch(':id/like')
  async like(@User('sub') userId: string, @Param('id') movieId: string) {
    return this.movieService.like(userId, movieId);
  }
}
