import { IsInt, IsString, IsUUID } from 'class-validator';

export class LikeMovieDto {
  @IsString()
  @IsUUID()
  movieId: string;

  @IsInt()
  value: 1 | -1;
}
