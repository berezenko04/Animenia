import { Button, darken, Grid, Stack } from "@mui/material";
import { useRef } from "react";

// components
import MoviesBlockHead, { type MoviesBlockHeadProps } from "../MoviesBlockHead";
import MoviesSwiper from "@/components/common/MoviesSwiper";
import MovieCard from "@/components/common/MovieCard";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";
import type { Swiper } from "swiper/types";

// theme
import theme from "@/theme";
import MovieCardSkeleton from "@/components/ui/loaders/MovieCardSkeleton";

interface MoviesBlockProps extends Omit<MoviesBlockHeadProps, "swiperRef"> {
  movies: MovieCardType[];
  isLazyLoad?: boolean;
}

const MoviesBlock: React.FC<MoviesBlockProps> = ({ title, icon, movies, isSwipe, isLazyLoad }) => {
  const swiperRef = useRef<Swiper | null>(null);

  return (
    <Stack sx={{ gap: !isSwipe ? 2.5 : 1.5 }}>
      <MoviesBlockHead swiperRef={swiperRef} title={title} icon={icon} isSwipe={isSwipe} />
      {isSwipe ? (
        <MoviesSwiper swiperRef={swiperRef} data={movies} />
      ) : (
        <Grid container spacing={4}>
          {movies?.map((card) => (
            <Grid key={card.id} size={{ xs: 4 }}>
              <MovieCard {...card} />
            </Grid>
          ))}
          <Grid size={{ xs: 4 }}>
            <MovieCardSkeleton />
          </Grid>
        </Grid>
      )}
      {isLazyLoad && movies.length > 9 && (
        <Button
          sx={{
            backgroundColor: "backgroundPrimary.main",
            py: 1.5,
            color: "primary.main",
            fontSize: 18,
            fontWeight: 500,
            borderRadius: "10px",
            boxShadow: "0 4px 4px 0 rgba(229, 229, 229, 0.25)",
            "&:hover": {
              backgroundColor: darken(theme.palette.backgroundPrimary.main, 0.07),
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
