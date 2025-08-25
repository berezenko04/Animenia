import type { Pagination } from "@/types/base.types";
import type { Genre } from "@/types/enums.types";

export interface GetAllMoviesParams extends Pagination {
  year?: string | number;
  genre?: Genre;
}

export type MovieCard = {
  id: string;
  posterUrl: string;
  title: string;
  description: string;
  rating: number;
  genres: Array<Genre>;
};
