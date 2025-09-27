import { Transform } from 'class-transformer';
import { IsString, IsUUID, Length } from 'class-validator';
import DOMPurify from 'isomorphic-dompurify';

export class CreateCommentDto {
  @IsUUID()
  movieId: string;

  @IsString()
  @Length(6, 256)
  @Transform(({ value }) => DOMPurify.sanitize(value))
  text: string;
}
