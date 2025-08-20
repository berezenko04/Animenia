import { Injectable, NotFoundException } from '@nestjs/common';

// service
import { PrismaService } from 'src/prisma/prisma.service';

// dto
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MovieService {
  constructor(private readonly prisma: PrismaService) {}

  async all({ page, perPage }: PaginationDto) {
    const [movies, total] = await this.prisma.$transaction([
      this.prisma.movie.findMany({
        skip: (page - 1) * perPage,
        take: perPage,
      }),
      this.prisma.movie.count(),
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
    return await this.prisma.movie.create({ data: dto });
  }

  async like(userId: string, movieId: string) {
    await this.get(movieId);

    const existingLike = await this.prisma.movieLike.findUnique({
      where: { movieId_userId: { movieId, userId } },
    });

    if (existingLike) {
      await this.prisma.movieLike.create({
        data: { movieId, userId },
      });
    } else {
      await this.prisma.movieLike.delete({
        where: { movieId_userId: { movieId, userId } },
      });
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
