import type { Pagination } from "@/types/base.types";
import type { Genre } from "@/types/enums.types";

export interface GetAllMoviesParams extends Pagination {
  year?: string | number;
  genre?: Genre;
}

export type MovieNewsItem = {
  id: string;
  slug: string;
  title: string;
  posterUrl: string;
  releaseYear: number;
  genres: Genre[];
};

export type MovieCard = {
  id: string;
  posterUrl: string;
  slug: string;
  title: string;
  description: string;
  rating: number;
  genres: Genre[];
};

export interface MovieFullInfo extends MovieCard {
  releaseYear: number;
  trailerUrl: string;
  screenshots: MovieScreenshot[];
}

export type MovieScreenshot = {
  id: string;
  movieId: string;
  url: string;
};
