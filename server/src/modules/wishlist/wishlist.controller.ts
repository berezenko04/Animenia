import { Controller, Delete, Param, Post } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { User } from 'src/common/decorators/user.decorator';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post(':id')
  async addWish(@User('sub') userId: string, @Param(':id') movieId: string) {
    return this.wishlistService.addWish(userId, movieId);
  }

  @Delete(':id')
  async deleteWish(@User('sub') userId: string, @Param(':id') movieId: string) {
    return this.wishlistService.deleteWish(userId, movieId);
  }
}
