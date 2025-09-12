import { Stack } from "@mui/material";

// components
import MovieList from "@/components/movies/List";
import SectionBlockHead from "@/components/common/SectionBlockHead";

// icons
import { AppsOutlined } from "@mui/icons-material";

const AllAnimePage: React.FC = () => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="All Anime" icon={AppsOutlined} />
      <MovieList />
    </Stack>
  );
};

export default AllAnimePage;
