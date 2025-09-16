import {  useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import toast from "react-hot-toast";

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard } from "@/api/movie/movie.types";
import type { Genre } from "@/types/enums.types";


type UseMoviesProps = {
  limit?: number;
  genre?: Genre | "all";
  year?: string;
};

export const useMovies = ({ limit = 10, genre, year }: UseMoviesProps = {}) => {
  const [page, setPage] = useState<number>(1);

  const genreFilter = genre === "all" ? undefined : genre;
  const yearFilter = year === "all" ? undefined : year;

  useEffect(() => {
    setPage(1);
  }, [genre, year]);

  const {data, isLoading, error} = useQuery<{data: MovieCard[], total: number}>({
    queryKey: ["movies", page, limit, genre, year],
    queryFn: async () => {
      try {
        return await MovieService.all({ page, limit, genre: genreFilter, year: yearFilter });
      } catch (err) {
        const message = err instanceof Error ? err.message : "Unknown error";
        toast.error(message);
        throw err;
      }
    },
    placeholderData: (prev) => prev,
  })


  return {
    movies: data?.data ?? [],
    total: data?.total ?? 0,
    page,
    setPage,
    isLoading,
    error,
  };
};
