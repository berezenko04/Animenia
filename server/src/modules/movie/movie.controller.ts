import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

// services
import { MovieService } from './movie.service';

// guards
import { OptionalJwtAuthGuard } from '../auth/guards/jwt-optional.guard';

// dto
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetAllMoviesDto } from './dto/get-all-movies.dto';

// decorators
import { User } from 'src/common/decorators/user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';


@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @UseGuards(OptionalJwtAuthGuard)
  @Get()
  async all(@User() userId: string | null, @Query() query: GetAllMoviesDto) {
    return this.movieService.all(userId, query);
  }

  @Get('random')
  async getRandom() {
    return this.movieService.getRandomMovie()
  }

  @Get('news')
  async getNews() {
    return this.movieService.getNews();
  }

  @UseGuards(OptionalJwtAuthGuard)
  @Get('by-slug/:slug')
  async getBySlug(@User() userId: string | null, @Param('slug') slug: string) {
    return this.movieService.getBySlug(userId, slug);
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
  async addLike(@User() userId: string, @Param('id') movieId: string) {
    await this.movieService.addLike(userId, movieId);
    return {message: "Movie was successfully liked"}
  }

  @Auth()
  @Delete(':id/like')
  async deleteLike(@User() userId: string, @Param('id') movieId: string) {
    await this.movieService.deleteLike(userId, movieId);
    return {message: "Movie was successfully removed like"}
  }

  @Auth()
  @HttpCode(200)
  @Post(':id/comments')
  async createComment(
    @User() userId: string,
    @Param('id') movieId: string,
    @Body('text') text: string,
  ) {
    await this.movieService.createComment(userId, { movieId, text });
    return { message: 'Comment has been created' };
  }

  @Get(':id/comments')
  async getComments(@Param('id') movieId: string) {
    return this.movieService.getComments(movieId);
  }
}
