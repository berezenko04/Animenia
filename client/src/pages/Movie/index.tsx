import { Stack } from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

// components
import MovieListItem from "@/components/common/MovieListItem";
import MovieScreenshots from "@/components/common/MovieScreenshots";
import MoviesBlockHead from "@/components/common/MoviesBlockHead";
import MoviesBlock from "@/components/common/MoviesBlock";

// api
import MovieService from "@/api/movie/movie.service";

// utils
import { catchError } from "@/utils/catchError";

// types
import { type MovieCard as MovieCardType, type MovieFullInfo } from "@/api/movie/movie.types";

// icons
import { GroupOutlined, VideocamOutlined } from "@mui/icons-material";

const MoviePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieFullInfo | null>(null);
  const [similarMovies, setSimilarMovies] = useState<MovieCardType[]>([]);

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

  useEffect(() => {
    (async () => {
      try {
        const result = await MovieService.all({ page: 1, limit: 10 });
        setSimilarMovies(result.data);
      } catch (err) {
        catchError(err);
      }
    })();
  }, []);

  if (!movie) {
    return null;
  }

  return (
    <Stack sx={{ gap: 6 }}>
      <Stack sx={{ gap: 4 }}>
        <MoviesBlockHead title="Anime" icon={VideocamOutlined} />
        <MovieListItem isListItem={false} {...movie} />
        <MovieScreenshots screenshots={movie.screenshots} />
        <ReactPlayer
          src={movie.trailerUrl}
          controls
          style={{ width: "100%", height: 450, borderRadius: "10px", overflow: "hidden" }}
        />
      </Stack>
      <MoviesBlock movies={similarMovies} title="Similar Anime" icon={GroupOutlined} isSwipe />
    </Stack>
  );
};

export default MoviePage;
