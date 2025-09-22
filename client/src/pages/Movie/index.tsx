import { Stack } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

// components
import MovieListItem from "@/components/movies/ListItem";
import Screenshots from "@/components/movies/Screenshots";
import SectionBlockHead from "@/components/common/SectionBlockHead";
import SectionBlock from "@/components/common/SectionBlock";
import MovieListItemSkeleton from "@/components/ui/loaders/skeletons/MovieListItemSkeleton";
import VideoPlayer from "@/components/common/VideoPlayer";
import MovieComments from "@/components/movies/Comments";

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
      } finally {
        setIsLoading(false);
      }
    })();
  }, [slug]);

  useEffect(() => {
    if (!isLoading && movie) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isLoading, movie]);

  return (
    <Stack sx={{ gap: 6 }}>
      <Stack sx={{ gap: 4 }}>
        <SectionBlockHead title="Anime" icon={VideocamOutlined} />
        {!isLoading && movie ? (
          <>
            <MovieListItem isListItem={false} {...movie} />
            <Screenshots screenshots={movie?.screenshots} />
            <VideoPlayer src={movie?.trailerUrl} controls playsInline />
          </>
        ) : (
          <MovieListItemSkeleton />
        )}
      </Stack>
      <SectionBlock
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
