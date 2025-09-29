import { Stack } from "@mui/material";
import { useState } from "react";

// components
import MovieList from "@/components/features/movies/List";
import Filters from "@/components/features/movies/Filters";
import SectionBlockHead from "@/components/ui/layout/SectionBlockHead";

// hooks
import { useMovies } from "@/hooks/useMovies";

// types
import { Genre } from "@/types/enums.types";

// icons
import { AppsOutlined } from "@mui/icons-material";
import ResponsivePagination from "@/components/ui/layout/ResponsivePagination";

const AllAnimePage: React.FC = () => {
  const [year, setYear] = useState<string>("all");
  const [genre, setGenre] = useState<Genre | "all">("all");

  const limit = 4;
  const { movies, isLoading, total, page, setPage } = useMovies({ limit, year, genre });

  const pages = Math.ceil(total / limit);

  return (
    <Stack sx={{ gap: 2.5, alignItems: "center" }}>
      <SectionBlockHead
        title="All Anime"
        icon={AppsOutlined}
        additionalContent={<Filters year={year} genre={genre} setYear={setYear} setGenre={setGenre} />}
      />
      <MovieList isLoading={isLoading} movies={movies} />
      {pages > 1 && <ResponsivePagination page={page} onChange={(_, val) => setPage(val)} count={pages} />}
    </Stack>
  );
};

export default AllAnimePage;
