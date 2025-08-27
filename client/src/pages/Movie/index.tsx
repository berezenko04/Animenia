import { Stack } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

// components
import MovieListItem from "@/components/common/MovieListItem";
import MovieScreenshots from "@/components/common/MovieScreenshots";

// api
import MovieService from "@/api/movie/movie.service";

// utils
import { catchError } from "@/utils/catchError";

// types
import type { MovieFullInfo } from "@/api/movie/movie.types";

const MoviePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieFullInfo | null>(null);

  useEffect(() => {
    setIsLoading(true);

    if (!slug) {
      return;
    }

    (async () => {
      try {
        const result = await MovieService.getBySlug(slug);
        setMovie(result);
      } catch (err) {
        catchError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [slug]);

  if (!movie) {
    return null;
  }

  return (
    <Stack>
      <MovieListItem isListItem={false} {...movie} />
      <MovieScreenshots screenshots={movie.screenshots} />
    </Stack>
  );
};

export default MoviePage;
