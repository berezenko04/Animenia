import { Genre } from "@/types/enums.types";

export const formatGenres = (genres: Genre[]) => {
  return genres.map((g) => g.charAt(0) + g.slice(1).toLowerCase().replaceAll("_", " ")).join(", ");
};
