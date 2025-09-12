import { Swiper as SwiperInitial, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// components
import MovieCard from "@/components/movies/MovieCard";
import MovieCardSkeleton from "@/components/ui/loaders/skeletons/MovieCardSkeleton";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";
import type { Swiper } from "swiper/types";

type MoviesSwiperProps = {
  data: MovieCardType[];
  isLoading: boolean;
  swiperRef: React.RefObject<Swiper | null>;
};

const MoviesSwiper: React.FC<MoviesSwiperProps> = ({ swiperRef, isLoading, data }) => {
  return (
    <SwiperInitial
      spaceBetween={32}
      slidesPerView={3}
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      style={{ width: "100%" }}
    >
      {isLoading
        ? [...Array(3)].map((_, idx) => (
            <SwiperSlide key={idx}>
              <MovieCardSkeleton />
            </SwiperSlide>
          ))
        : data?.map((i, idx) => (
            <SwiperSlide style={{ height: "100%" }} key={idx}>
              <MovieCard {...i} />
            </SwiperSlide>
          ))}
    </SwiperInitial>
  );
};

export default MoviesSwiper;
