import { Pagination, Stack } from "@mui/material";

// components
import MovieListItem from "../ListItem";
import MovieListItemSkeleton from "@/components/ui/loaders/skeletons/MovieListItemSkeleton";

// hooks
import { useMovies } from "@/hooks/useMovies";

const List: React.FC = () => {
  const limit = 4;
  const { movies, isLoading, total, page, setPage } = useMovies({ limit });

  const pages = Math.ceil(total / limit);

  return (
    <Stack sx={{ gap: 4, alignItems: "center" }}>
      <Stack sx={{ gap: 4, width: "100%" }}>
        {isLoading
          ? [...Array(limit)].map((_, idx) => <MovieListItemSkeleton key={idx} />)
          : movies.map((m) => <MovieListItem key={m.id} {...m} />)}
      </Stack>
      {pages > 1 && <Pagination page={page} onChange={(_, val) => setPage(val)} count={pages} />}
    </Stack>
  );
};

export default List;
