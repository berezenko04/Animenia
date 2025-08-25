import { Injectable, NotFoundException } from '@nestjs/common';

// service
import { PrismaService } from 'src/prisma/prisma.service';

// dto
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetAllMoviesDto } from './dto/get-all-movies.dto';

// utils
import { createSlug } from 'src/utils/createSlug';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async all({ page, limit, genre, year }: GetAllMoviesDto) {
    const where: any = {};

    if (genre) {
      where.genres = { has: genre };
    }

    if (year) {
      where.releaseYear = +year;
    }

    const [movies, total] = await this.prisma.$transaction([
      this.prisma.movie.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where,
        select: {
          id: true,
          posterUrl: true,
          title: true,
          description: true,
          rating: true,
          genres: true,
        },
      }),
      this.prisma.movie.count({ where }),
    ]);

    return { data: movies, total };
  }

  async get(id: string) {
    const movie = await this.prisma.movie.findUnique({
      where: { id },
      include: { screenshots: { take: 3 } },
    });

    if (!movie) throw new NotFoundException('Movie is not found');

    return movie;
  }

  async create(dto: CreateMovieDto) {
    return await this.prisma.movie.create({
      data: { ...dto, slug: createSlug(dto.title) },
    });
  }

  async addLike(userId: string, movieId: string) {
    await this.get(movieId);

    await this.prisma.movieLike.create({
      data: { movieId, userId },
    });

    const likeCount = await this.prisma.movieLike.count({
      where: { movieId },
    });

    return await this.prisma.movie.update({
      where: { id: movieId },
      data: { rating: likeCount },
    });
  }

  async deleteLike(userId: string, movieId: string) {
    await this.get(movieId);

    const existingLike = await this.prisma.movieLike.findUnique({
      where: { movieId_userId: { movieId, userId } },
    });

    if (existingLike) {
      await this.prisma.movieLike.delete({
        where: { movieId_userId: { movieId, userId } },
      });
    } else {
      throw new NotFoundException('Like is not found');
    }

    const likeCount = await this.prisma.movieLike.count({
      where: { movieId },
    });

    return await this.prisma.movie.update({
      where: { id: movieId },
      data: { rating: likeCount },
    });
  }
}
