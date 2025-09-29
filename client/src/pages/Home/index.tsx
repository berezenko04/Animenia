import { Stack } from "@mui/material";

// components
import SectionBlock from "@/components/ui/layout/SectionBlock";

// hooks
import { useMovies } from "@/hooks/useMovies";

// icons
import { LeaderboardOutlined, LocalFireDepartmentOutlined } from "@mui/icons-material";

const HomePage: React.FC = () => {
  const { movies, total, page, setPage, isLoading } = useMovies();

  return (
    <Stack sx={{ gap: 4 }}>
      <SectionBlock title="Popular" icon={LocalFireDepartmentOutlined} movies={movies} isSwipe isLoading={isLoading} />
      <SectionBlock
        title="Top 100"
        icon={LeaderboardOutlined}
        movies={movies}
        page={page}
        setPage={setPage}
        total={total}
        isLoading={isLoading}
      />
    </Stack>
  );
};

export default HomePage;
