import { Grid, Stack } from "@mui/material";
import { useRef } from "react";

// components
import SectionBlockHead, { type SectionBlockHeadProps } from "../SectionBlockHead";
import ResponsivePagination from "../ResponsivePagination";
import MovieCardSkeleton from "@/components/ui/loaders/skeletons/MovieCardSkeleton";
import MoviesSwiper from "@/components/movies/Swiper";
import MovieCard from "@/components/movies/Card";

// utils
import { repeat } from "@/utils/repeat";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";
import type { Swiper } from "swiper/types";

// constants
import { MOVIES_LIMIT } from "@/constants";

interface SectionBlockProps extends Omit<SectionBlockHeadProps, "swiperRef"> {
  movies: MovieCardType[];
  page?: number;
  setPage?: (p: number) => void;
  total?: number;
  isLoading: boolean;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
  title,
  icon,
  movies,
  isSwipe,
  page,
  setPage,
  isLoading = true,
  total,
}) => {
  const limit = MOVIES_LIMIT;
  const pages = total ? Math.ceil(total / limit) : 0;
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
      {!isSwipe && page !== undefined && setPage && total !== undefined && pages > 1 && (
        <ResponsivePagination page={page} onChange={(_, val) => setPage(val)} count={pages} />
      )}
    </Stack>
  );
};

export default SectionBlock;
