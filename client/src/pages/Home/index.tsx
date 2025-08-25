import { useEffect, useState } from "react";

// components
import MovieCard from "@/components/ui/MovieCard";

// service
import MovieService from "@/api/movie/movie.service";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<MovieCardType[]>();

  useEffect(() => {
    (async () => {
      const data = await MovieService.all({ page: 1, limit: 10 });
      setMovies(data.data);
    })();
  }, []);

  return (
    <div>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default HomePage;
