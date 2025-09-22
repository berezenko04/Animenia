import { httpDelete, httpGet, httpPost } from "@/middlewares/axios.middleware";

// types
import type { MovieCard, MovieComment, GetAllMoviesParams, MovieFullInfo, MovieNewsItem } from "./movie.types";

const R = {
  movies: "/movies",
  byId: (id: string) => `/movies/${id}`,
  bySlug: (slug: string) => `/movies/by-slug/${slug}`,
  random: "/movies/random",
  news: "/movies/news",
  comments: (id: string) => `/movies/${id}/comments`,
  like: (id: string) => `/movies/${id}/like`,
} as const;

const MovieService = {
  async all(params: GetAllMoviesParams) {
    return httpGet<MovieCard[]>(R.movies, { params });
  },
  async get(movieId: string) {
    return httpGet<MovieFullInfo>(R.byId(movieId));
  },
  async random() {
    return httpGet<{ slug: string }>(R.random);
  },
  async getBySlug(slug: string) {
    return httpGet<MovieFullInfo>(R.bySlug(slug));
  },
  async getNews() {
    return httpGet<MovieNewsItem[]>(R.news);
  },
  async getComments(movieId: string) {
    return httpGet<MovieComment[]>(R.comments(movieId));
  },
  async createComment(movieId: string, text: string) {
    return httpPost<MovieComment>(R.comments(movieId), { text });
  },
  async addLike(movieId: string) {
    return httpPost<void>(R.like(movieId));
  },
  async removeLike(movieId: string) {
    return httpDelete<void>(R.like(movieId));
  },
};

export default MovieService;
