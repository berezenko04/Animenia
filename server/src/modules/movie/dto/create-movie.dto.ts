import { Genre } from '@prisma/client';
import {
  ArrayNotEmpty,
  IsArray,
  IsEnum,
  IsInt,
  IsString,
  IsUrl,
  Length,
  Max,
  Min,
} from 'class-validator';

export class CreateMovieDto {
  @IsUrl()
  posterUrl: string;

  @IsString()
  @Length(2, 64)
  title: string;

  @IsString()
  @Length(10, 256)
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

  @IsArray()
  @ArrayNotEmpty()
  @IsUrl({}, { each: true })
  screenshots: string[];
}
