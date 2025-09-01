import { Controller, Delete, Param, Post } from '@nestjs/common';

// services
import { WishlistService } from './wishlist.service';

// decorators
import { User } from 'src/common/decorators/user.decorator';
import { Auth } from '../auth/decorators/auth.decorator';

@Auth()
@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @Post(':id')
  async addWish(@User() userId: string, @Param('id') movieId: string) {
    return this.wishlistService.addWish(userId, movieId);
  }

  @Delete(':id')
  async deleteWish(@User() userId: string, @Param('id') movieId: string) {
    return this.wishlistService.deleteWish(userId, movieId);
  }
}
