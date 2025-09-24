import { Stack } from "@mui/material";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

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

// types
import { type MovieFullInfo } from "@/api/movie/movie.types";

// icons
import { GroupOutlined, VideocamOutlined } from "@mui/icons-material";
import { getYoutubeVideoId } from "@/utils/getYoutubeVideoId";

const MoviePage: React.FC = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug!;

  const { movies: similarMovies, isLoading: similarMoviesLoading } = useMovies({ limit: 10 });

  const { data: movie, isLoading: isMovieLoading } = useQuery<MovieFullInfo>({
    queryKey: ["movie", slug],
    queryFn: async () => await MovieService.getBySlug(slug),
  });

  useEffect(() => {
    if (!isMovieLoading && movie) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isMovieLoading, movie]);

  return (
    <Stack sx={{ gap: 6 }}>
      <Stack sx={{ gap: 4 }}>
        <SectionBlockHead title="Anime" icon={VideocamOutlined} />
        {!isMovieLoading && movie ? (
          <>
            <MovieListItem isListItem={false} {...movie} />
            <Screenshots screenshots={movie?.screenshots} />
            <VideoPlayer videoId={getYoutubeVideoId(movie.trailerUrl)} />
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
      {!isMovieLoading && movie && (
        <MovieComments isCommented={movie.isCommented} movieId={movie.id} />
      )}
    </Stack>
  );
};

export default MoviePage;
