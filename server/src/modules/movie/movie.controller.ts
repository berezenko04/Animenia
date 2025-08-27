import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';

// services
import { MovieService } from './movie.service';

// dto
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetAllMoviesDto } from './dto/get-all-movies.dto';

// decorators
import { User } from 'src/common/decorators/user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async all(@Query() query: GetAllMoviesDto) {
    return this.movieService.all(query);
  }

  @Get('news')
  async getNews() {
    return this.movieService.getNews();
  }

  @Get('by-slug/:slug')
  async getBySlug(@Param('slug') slug: string) {
    return this.movieService.getBySlug(slug);
  }

  @Get(':id')
  async get(@Param('id') movieId: string) {
    return this.movieService.get(movieId);
  }

  @Auth()
  @HttpCode(200)
  @Post()
  async create(@Body() dto: CreateMovieDto) {
    await this.movieService.create(dto);
    return { message: 'Movie is successfully created' };
  }

  @Auth()
  @Post(':id/like')
  async addLike(@User('sub') userId: string, @Param('id') movieId: string) {
    return this.movieService.addLike(userId, movieId);
  }

  @Auth()
  @Delete(':id/like')
  async deleteLike(@User('sub') userId: string, @Param('id') movieId: string) {
    return this.movieService.deleteLike(userId, movieId);
  }
}
