import { Button, darken, Grid, Stack, useTheme } from "@mui/material";
import { useRef } from "react";

// components
import SectionBlockHead, { type SectionBlockHeadProps } from "../SectionBlockHead";
import MovieCardSkeleton from "@/components/ui/loaders/skeletons/MovieCardSkeleton";
import MoviesSwiper from "@/components/movies/Swiper";
import MovieCard from "@/components/movies/Card";

// utils
import { repeat } from "@/utils/repeat";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";
import type { Swiper } from "swiper/types";

interface SectionBlockProps extends Omit<SectionBlockHeadProps, "swiperRef"> {
  movies: MovieCardType[];
  isLoading: boolean;
  isLazyLoad?: boolean;
}

const SectionBlock: React.FC<SectionBlockProps> = ({ title, icon, movies, isSwipe, isLoading = true, isLazyLoad }) => {
  const theme = useTheme();
  const swiperRef = useRef<Swiper | null>(null);

  return (
    <Stack sx={{ gap: !isSwipe ? 2.5 : 1.5 }} component="section">
      <SectionBlockHead swiperRef={swiperRef} title={title} icon={icon} isSwipe={isSwipe} />
      {isSwipe ? (
        <MoviesSwiper isLoading={isLoading} swiperRef={swiperRef} data={movies} />
      ) : (
        <Grid container spacing={3}>
          {!isLoading
            ? movies?.map((card) => (
                <Grid key={card.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <MovieCard {...card} />
                </Grid>
              ))
            : repeat(6, (idx) => (
                <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                  <MovieCardSkeleton />
                </Grid>
              ))}
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
            boxShadow: 1,
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

export default SectionBlock;
