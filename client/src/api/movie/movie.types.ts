import type { Pagination } from "@/types/base.types";
import type { Genre } from "@/types/enums.types";

export interface GetAllMoviesParams extends Pagination {
  year?: string | number;
  genre?: Genre;
}

export type AllMoviesResponse = {
  data: MovieCard[];
  total: number;
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
  isLiked: boolean;
  genres: Genre[];
};

export interface MovieFullInfo extends MovieCard {
  releaseYear: number;
  trailerUrl: string;
  isCommented: boolean;
  screenshots: MovieScreenshot[];
}

export type MovieScreenshot = {
  id: string;
  movieId: string;
  url: string;
};

export type MovieComment = {
    id: string,
    text: string,
    createdAt: Date,
    user: {
        firstName: string,
        lastName: string,
        avatarUrl: string
    }
}
