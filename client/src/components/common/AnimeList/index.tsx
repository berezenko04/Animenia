import { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";

// components
import AnimeListItem from "../AnimeListItem";

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

const AnimeList: React.FC = () => {
  const [movies, setMovies] = useState<MovieCardType[]>([]);

  useEffect(() => {
    (async () => {
      const result = await MovieService.all({ page: 1, limit: 4 });
      setMovies(result.data);
    })();
  }, []);

  return (
    <Stack sx={{ gap: 4 }}>
      <Stack sx={{ gap: 4 }}>
        {movies.map((m) => (
          <AnimeListItem key={m.id} {...m} />
        ))}
      </Stack>
      <Pagination />
    </Stack>
  );
};

export default AnimeList;
