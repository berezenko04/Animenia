import { Swiper as SwiperInitial, SwiperSlide } from "swiper/react";

// components
import MovieCard from "@/components/ui/MovieCard";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

type MoviesSwiperProps = {
  data: MovieCardType[];
};

const MoviesSwiper: React.FC<MoviesSwiperProps> = ({ data }) => {
  return (
    <SwiperInitial
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ width: "100%" }}
    >
      {data?.map((i, idx) => (
        <SwiperSlide style={{ width: "100%", height: "100%" }} key={idx}>
          <MovieCard {...i} />
        </SwiperSlide>
      ))}
    </SwiperInitial>
  );
};

export default MoviesSwiper;
