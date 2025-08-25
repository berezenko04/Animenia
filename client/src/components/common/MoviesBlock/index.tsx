import { Grid, Stack } from "@mui/material";

// components
import MoviesBlockHead, { type MoviesBlockHeadProps } from "../MoviesBlockHead";
import MovieCard from "@/components/ui/MovieCard";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

interface MoviesBlockProps extends MoviesBlockHeadProps {
  cards: MovieCardType[] | undefined;
}

const MoviesBlock: React.FC<MoviesBlockProps> = ({ title, icon, isSwipe, cards }) => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title={title} icon={icon} isSwipe={isSwipe} />
      <Grid container spacing={4}>
        {cards?.map((card) => (
          <Grid size={{ xs: 4 }}>
            <MovieCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default MoviesBlock;
