import { Button, darken, Grid, Stack } from "@mui/material";

// components
import MoviesBlockHead, { type MoviesBlockHeadProps } from "../MoviesBlockHead";
import MoviesSwiper from "@/components/common/MoviesSwiper";
import MovieCard from "@/components/ui/MovieCard";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

// theme
import theme from "@/theme";

interface MoviesBlockProps extends MoviesBlockHeadProps {
  movies: MovieCardType[];
  isLazyLoad?: boolean;
}

const MoviesBlock: React.FC<MoviesBlockProps> = ({ title, icon, movies, isSwipe, isLazyLoad }) => {
  return (
    <Stack sx={{ gap: !isSwipe ? 2.5 : 1.5 }}>
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
      {isLazyLoad && movies.length > 9 && (
        <Button
          sx={{
            backgroundColor: "white.main",
            py: 1.5,
            color: "primary.main",
            fontSize: 18,
            fontWeight: 500,
            borderRadius: "10px",
            boxShadow: "0 4px 4px 0 rgba(229, 229, 229, 0.25)",
            "&:hover": {
              backgroundColor: darken(theme.palette.white.main, 0.07),
            },
          }}
          fullWidth
        >
          Load More
        </Button>
      )}
    </Stack>
  );
};

export default MoviesBlock;
