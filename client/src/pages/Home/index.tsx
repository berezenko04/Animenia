import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

// components
import MoviesBlock from "@/components/common/MoviesBlock";

// service
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

// utils
import { catchError } from "@/utils/catchError";

// icons
import { LeaderboardOutlined, LocalFireDepartmentOutlined } from "@mui/icons-material";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<MovieCardType[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      try {
        const data = await MovieService.all({ page: 1, limit: 10 });
        setMovies(data.data);
      } catch (err) {
        catchError(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Stack sx={{ gap: 6 }}>
      {movies && (
        <>
          <MoviesBlock
            title="Popular"
            icon={LocalFireDepartmentOutlined}
            movies={movies}
            isSwipe
            isLoading={isLoading}
          />
          <MoviesBlock title="Top 100" icon={LeaderboardOutlined} movies={movies} isLazyLoad isLoading={isLoading} />
        </>
      )}
    </Stack>
  );
};

export default HomePage;
