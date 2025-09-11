import { capitalize, Stack } from "@mui/material";
import { useEffect, useState } from "react";

// components
import MoviesBlock from "@/components/common/MoviesBlock";

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard } from "@/api/movie/movie.types";
import { Genre } from "@/types/enums.types";

// icons
import { AppsOutlined } from "@mui/icons-material";
import { formatGenres } from "@/utils/formatGenres";

type MoviesByGenre = {
  [genre: string]: MovieCard[];
};

const GenresPage: React.FC = () => {
  const genres = [
    Genre.ACTION,
    Genre.ADVENTURE,
    Genre.COMEDY,
    Genre.FANTASY,
    Genre.MAGIC,
    Genre.PARANORMAL,
    Genre.ROMANCE,
    Genre.SCHOOL_LIFE,
  ];

  const [moviesByGenre, setMoviesByGenre] = useState<MoviesByGenre>({});

  useEffect(() => {
    (async () => {
      try {
        const results = await Promise.all(
          genres.map((genre) => MovieService.all({ genre, limit: 9 }).then((result) => result.data))
        );

        const mapped = results.reduce((acc, movies, idx) => {
          acc[genres[idx]] = movies;
          return acc;
        }, {} as Record<string, MovieCard[]>);

        setMoviesByGenre(mapped);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <Stack sx={{ gap: 4 }}>
      {genres.map((genre) => (
        <MoviesBlock
          key={genre}
          icon={AppsOutlined}
          title={formatGenres([genre])}
          movies={moviesByGenre[genre] || []}
          isLoading={!moviesByGenre[genre]}
        />
      ))}
    </Stack>
  );
};

export default GenresPage;
