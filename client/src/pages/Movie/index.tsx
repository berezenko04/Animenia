import { Stack } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

// components
import MovieListItem from "@/components/common/MovieListItem";
import MovieScreenshots from "@/components/common/MovieScreenshots";
import MoviesBlockHead from "@/components/common/MoviesBlockHead";
import MoviesBlock from "@/components/common/MoviesBlock";
import MovieListItemSkeleton from "@/components/ui/loaders/MovieListItemSkeleton";
import Player from "@/components/common/Player";
import MovieComments from "@/components/common/MovieComments";

// api
import MovieService from "@/api/movie/movie.service";

// hooks
import { useMovies } from "@/hooks/useMovies";

// utils
import { catchError } from "@/utils/catchError";

// types
import { type MovieFullInfo } from "@/api/movie/movie.types";

// icons
import { GroupOutlined, VideocamOutlined } from "@mui/icons-material";

const MoviePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const { movies: similarMovies, isLoading: similarMoviesLoading } = useMovies({ limit: 10 });

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieFullInfo | null>(null);

  useEffect(() => {
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

  return (
    <Stack sx={{ gap: 6 }}>
      <Stack sx={{ gap: 4 }}>
        <MoviesBlockHead title="Anime" icon={VideocamOutlined} />
        {!isLoading && movie ? (
          <>
            <MovieListItem isListItem={false} {...movie} />
            <MovieScreenshots screenshots={movie?.screenshots} />
            <Player src={movie?.trailerUrl} controls playsInline />
          </>
        ) : (
          <MovieListItemSkeleton />
        )}
      </Stack>
      <MoviesBlock
        isLoading={similarMoviesLoading}
        movies={similarMovies}
        title="Similar Anime"
        icon={GroupOutlined}
        isSwipe
      />
      {!isLoading && movie && <MovieComments isCommented={movie.isCommented} movieId={movie.id} />}
    </Stack>
  );
};

export default MoviePage;
