import { Module } from '@nestjs/common';

// controllers
import { WishlistController } from './wishlist.controller';

// services
import { WishlistService } from './wishlist.service';
import { MovieService } from '../movie/movie.service';

@Module({
  controllers: [WishlistController],
  providers: [WishlistService, MovieService],
})
export class WishlistModule {}
