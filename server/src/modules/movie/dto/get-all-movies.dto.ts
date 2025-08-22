import { Genre } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';

// dto
import { PaginationDto } from 'src/common/dto/pagination.dto';

export class GetAllMoviesDto extends PaginationDto {
  @IsEnum(Genre)
  @IsOptional()
  genre?: Genre;

  @IsInt()
  @IsOptional()
  @Type(() => Number)
  @Min(2000)
  @Max(new Date().getFullYear())
  year?: number;
}
