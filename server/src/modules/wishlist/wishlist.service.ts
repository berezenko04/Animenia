import { Injectable } from '@nestjs/common';

// services
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieService } from '../movie/movie.service';

@Injectable()
export class WishlistService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly movieService: MovieService,
  ) {}

  async addWish(userId: string, movieId: string) {
    await this.movieService.get(movieId);
    await this.prisma.wishList.create({ data: { userId, movieId } });
    return true;
  }

  async deleteWish(userId: string, movieId: string) {
    await this.movieService.get(movieId);

    const isWishExist = await this.prisma.wishList.findUnique({
      where: { userId_movieId: { userId, movieId } },
    });

    if (isWishExist) {
      await this.prisma.wishList.delete({
        where: { userId_movieId: { userId, movieId } },
      });
    }

    return true;
  }
}
