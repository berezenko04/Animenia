import { Swiper as SwiperInitial, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// components
import MovieCard from "@/components/movies/Card";
import MovieCardSkeleton from "@/components/ui/loaders/skeletons/MovieCardSkeleton";

// utils
import { repeat } from "@/utils/repeat";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";
import type { Swiper as SwiperType } from "swiper/types";

type SwiperProps = {
  data: MovieCardType[];
  isLoading: boolean;
  swiperRef: React.RefObject<SwiperType | null>;
};

const Swiper: React.FC<SwiperProps> = ({ swiperRef, isLoading, data }) => {
  return (
    <SwiperInitial
      spaceBetween={24}
      slidesPerView={3}
      modules={[Navigation]}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
      style={{ width: "100%" }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
      }}
    >
      {isLoading
        ? repeat(3, (idx) => (
            <SwiperSlide key={idx}>
              <MovieCardSkeleton />
            </SwiperSlide>
          ))
        : data?.map((movie) => (
            <SwiperSlide style={{ height: "100%" }} key={movie.id}>
              <MovieCard {...movie} />
            </SwiperSlide>
          ))}
    </SwiperInitial>
  );
};

export default Swiper;
