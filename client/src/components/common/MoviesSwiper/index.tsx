import { Swiper as SwiperInitial, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// components
import MovieCard from "@/components/common/MovieCard";
import MovieCardSkeleton from "@/components/ui/loaders/MovieCardSkeleton";

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
      {data?.map((i, idx) => (
        <SwiperSlide style={{ width: "100%", height: "100%" }} key={idx}>
          {isLoading ? <MovieCardSkeleton /> : <MovieCard {...i} />}
        </SwiperSlide>
      ))}
    </SwiperInitial>
  );
};

export default MoviesSwiper;
