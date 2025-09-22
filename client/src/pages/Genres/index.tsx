import { Stack } from "@mui/material";
import { useEffect, useState } from "react";

// components
import SectionBlock from "@/components/common/SectionBlock";

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard } from "@/api/movie/movie.types";
import { Genre } from "@/types/enums.types";

// utils
import { formatGenres } from "@/utils/formatGenres";

// icons
import { AppsOutlined } from "@mui/icons-material";

type MoviesByGenre = {
  [genre: string]: MovieCard[];
};

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

const GenresPage: React.FC = () => {
  const [moviesByGenre, setMoviesByGenre] = useState<MoviesByGenre>({});

  useEffect(() => {
    (async () => {
      const results = await Promise.all(
        genres.map((genre) => MovieService.all({ genre, limit: 9 }).then((result) => result.data))
      );

      const mapped = results.reduce((acc, movies, idx) => {
        acc[genres[idx]] = movies;
        return acc;
      }, {} as Record<string, MovieCard[]>);

      setMoviesByGenre(mapped);
    })();
  }, []);

  return (
    <Stack sx={{ gap: 4 }}>
      {genres.map((genre) => (
        <SectionBlock
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
