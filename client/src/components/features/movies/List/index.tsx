import { Stack } from "@mui/material";

// components
import MovieListItem from "../ListItem";
import MovieListItemSkeleton from "@/components/ui/loaders/skeletons/MovieListItemSkeleton";

// utils
import { repeat } from "@/utils/repeat";

// types
import type { MovieCard } from "@/api/movie/movie.types";

type ListProps = {
  isLoading: boolean;
  movies: MovieCard[];
};

const List: React.FC<ListProps> = ({ isLoading, movies }) => {
  return (
    <Stack sx={{ gap: 4, alignItems: "center" }}>
      <Stack sx={{ gap: 4, width: "100%" }}>
        {isLoading
          ? repeat(4, (idx) => <MovieListItemSkeleton key={idx} />)
          : movies.map((m) => <MovieListItem key={m.id} {...m} />)}
      </Stack>
    </Stack>
  );
};

export default List;
