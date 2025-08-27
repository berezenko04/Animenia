import { Stack } from "@mui/material";

// components
import AnimeList from "@/components/common/MovieList";
import MoviesBlockHead from "@/components/common/MoviesBlockHead";

// icons
import { Apps } from "@mui/icons-material";

const AllAnime: React.FC = () => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title="All Anime" icon={Apps} />
      <AnimeList />
    </Stack>
  );
};

export default AllAnime;
