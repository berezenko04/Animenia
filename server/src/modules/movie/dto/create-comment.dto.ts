import { IsString, IsUUID, Length } from 'class-validator';

export class CreateCommentDto {
  @IsUUID()
  movieId: string;

  @IsUUID()
  userId: string;

  @IsString()
  @Length(6, 256)
  text: string;
}
