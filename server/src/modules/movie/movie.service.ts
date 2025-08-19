import { Injectable } from '@nestjs/common';

// service
import { PrismaService } from 'src/prisma/prisma.service';

// dto
import { PaginationDto } from 'src/common/dto/pagination.dto';

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
    return await this.prisma.movie.findUnique({ where: { id } });
  }

  async changeRating(id: string, rate: 1 | -1) {
    return await this.prisma.movie.update({
      where: { id },
      data: { rating: { increment: rate } },
    });
  }
}
