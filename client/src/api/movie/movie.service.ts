import { instance } from "@/middlewares/axios.middleware";

const MovieService = {
  async all() {
    const { data } = await instance.get("/movies");
    return data;
  },
  async get(movieId: string) {
    const { data } = await instance.get(`/mlovies/${movieId}`);
    return data;
  },
};

export default MovieService;
