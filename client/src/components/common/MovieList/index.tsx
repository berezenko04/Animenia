import { useEffect, useState } from "react";
import { Pagination, Stack } from "@mui/material";

// components
import MovieListItem from "../MovieListItem";

// api
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<MovieCardType[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const limit = 4;

  useEffect(() => {
    (async () => {
      const result = await MovieService.all({ page, limit });
      setMovies(result.data);
      setTotal(result.total);
    })();
  }, [page]);

  console.log("qq", movies);

  return (
    <Stack sx={{ gap: 4, alignItems: "center" }}>
      <Stack sx={{ gap: 4 }}>
        {movies.map((m) => (
          <MovieListItem key={m.id} {...m} />
        ))}
      </Stack>
      <Pagination page={page} onChange={(_, val) => setPage(val)} count={Math.ceil(total / limit)} />
    </Stack>
  );
};

export default MovieList;
