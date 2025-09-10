import { IsString, IsUUID, Length } from 'class-validator';

export class CreateCommentDto {
  @IsUUID()
  movieId: string;

  @IsString()
  @Length(6, 256)
  text: string;
}
