import { Genre } from "@/types/enums.types";

export const formatGenres = (genres: (Genre | undefined)[] = []) => {
  const specialCases: Record<string, string> = {
    SCI_FI: "Sci-Fi",
  };

  return genres
    .filter((g): g is Genre => typeof g === "string" && g.length > 0)
    .map((g) => {
      if (specialCases[g]) return specialCases[g];
      return `${g[0].toUpperCase()}${g.slice(1).toLowerCase()}`;
    })
    .join(", ");
};