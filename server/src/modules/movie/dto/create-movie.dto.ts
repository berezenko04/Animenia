import { Genre } from '@prisma/client';
import {
  IsArray,
  IsEnum,
  IsInt,
  IsString,
  IsUrl,
  Max,
  Min,
} from 'class-validator';

export class CreateMovieDto {
  @IsUrl()
  posterUrl: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  @IsEnum(Genre, { each: true })
  genres: Genre[];

  @IsUrl()
  trailerUrl: string;

  @IsInt()
  @Min(2000)
  @Max(new Date().getFullYear())
  releaseYear: number;
}
