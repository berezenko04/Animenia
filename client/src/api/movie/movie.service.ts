import { instance } from "@/middlewares/axios.middleware";

// types
import type { GetAllMoviesParams } from "./movie.types";

const MovieService = {
  async all(params: GetAllMoviesParams) {
    const { data } = await instance.get("/movies", { params });
    return data;
  },
  async get(movieId: string) {
    const { data } = await instance.get(`/movies/${movieId}`);
    return data;
  },
  async getBySlug(slug: string) {
    const { data } = await instance.get(`/movies/by-slug/${slug}`);
    return data;
  },
  async getNews() {
    const { data } = await instance.get(`/movies/news`);
    return data;
  },
};

export default MovieService;
