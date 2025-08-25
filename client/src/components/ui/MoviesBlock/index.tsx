import { Grid, Stack } from "@mui/material";

// components
import MoviesBlockHead, { type MoviesBlockHeadProps } from "../MoviesBlockHead";
import MoviesSwiper from "@/components/common/MoviesSwiper";
import MovieCard from "@/components/ui/MovieCard";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

interface MoviesBlockProps extends MoviesBlockHeadProps {
  movies: MovieCardType[];
}

const MoviesBlock: React.FC<MoviesBlockProps> = ({ title, icon, isSwipe, movies }) => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title={title} icon={icon} isSwipe={isSwipe} />
      {isSwipe ? (
        <MoviesSwiper data={movies} />
      ) : (
        <Grid container spacing={4}>
          {movies?.map((card) => (
            <Grid key={card.id} size={{ xs: 4 }}>
              <MovieCard {...card} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default MoviesBlock;
