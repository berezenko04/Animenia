import {  useState } from "react";
import {useQuery} from '@tanstack/react-query';

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard } from "@/api/movie/movie.types";

type UseMoviesProps = {
  limit?: number;
};

export const useMovies = ({ limit = 10 }: UseMoviesProps = {}) => {
  const [page, setPage] = useState<number>(1);

  const {data, isLoading, error} = useQuery({
    queryKey: ["movies", page, limit],
    queryFn: () => MovieService.all({page, limit}),
    placeholderData: (prev) => prev
  })


  return {
    movies: data?.data as MovieCard[] || [],
    total: data?.total || 0,
    page,
    setPage,
    isLoading,
    error,
  };
};
