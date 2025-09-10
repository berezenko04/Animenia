import { useEffect, useState } from "react";
import toast from "react-hot-toast";

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard } from "@/api/movie/movie.types";

type UseMoviesProps = {
  limit?: number;
};

export const useMovies = ({ limit = 10 }: UseMoviesProps = {}) => {
  const [movies, setMovies] = useState<MovieCard[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await MovieService.all({ page, limit });
        if (mounted) {
          setMovies(result.data);
          setTotal(result.total);
        }
      } catch (err: any) {
        if (mounted) {
          setError(err.message || "Failed to fetch movies");
          toast.error(err.message || "Failed to fetch movies");
        }
      } finally {
        if (mounted) setIsLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [page, limit]);

  return {
    movies,
    total,
    page,
    setPage,
    isLoading,
    error,
  };
};
