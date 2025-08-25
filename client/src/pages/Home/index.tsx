import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

// components
import MoviesBlock from "@/components/common/MoviesBlock";

// service
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

// icons
import { LeaderboardOutlined, LocalFireDepartmentOutlined } from "@mui/icons-material";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<MovieCardType[]>();

  useEffect(() => {
    (async () => {
      const data = await MovieService.all({ page: 1, limit: 10 });
      setMovies(data.data);
    })();
  }, []);

  return (
    <Stack sx={{ gap: 6 }}>
      <MoviesBlock title="Popular" icon={LocalFireDepartmentOutlined} cards={movies} isSwipe />
      <MoviesBlock title="Top 100" icon={LeaderboardOutlined} cards={movies} />
    </Stack>
  );
};

export default HomePage;
