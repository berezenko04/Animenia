import { NavigateFunction } from "react-router";

// components
import MovieService from "@/api/movie/movie.service";

export const handleRandomMovie = (navigate: NavigateFunction) => async (e: React.MouseEvent) => {
  e.preventDefault();

  const { slug } = await MovieService.random();
  navigate(`/movies/${slug}`);
};
