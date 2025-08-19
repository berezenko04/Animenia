import { Injectable } from '@nestjs/common';

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
    return await this.prisma.movie.findUnique({
      where: { id },
      include: { screenshots: { take: 3 } },
    });
  }

  async create(dto: CreateMovieDto) {
    return await this.prisma.movie.create({ data: dto });
  }

  async like(userId: string, movieId: string, rate: 1 | -1) {
    await this.prisma.movieLike.upsert({
      where: { movieId_userId: { movieId, userId } },
      update: { value: rate },
      create: { movieId, userId, value: rate },
    });

    const total = await this.prisma.movieLike.aggregate({
      where: { movieId },
      _sum: { value: true },
    });

    return await this.prisma.movie.update({
      where: { id: movieId },
      data: { rating: total._sum.value || 0 },
    });
  }
}
