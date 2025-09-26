import { Stack } from "@mui/material";

// components
import SectionBlock from "@/components/common/SectionBlock";

// hooks
import { useMovies } from "@/hooks/useMovies";

// icons
import { LeaderboardOutlined, LocalFireDepartmentOutlined } from "@mui/icons-material";

const HomePage: React.FC = () => {
  const { movies, total, isLoading } = useMovies({ limit: 9 });

  return (
    <Stack sx={{ gap: 4 }}>
      <SectionBlock
        title="Popular"
        icon={LocalFireDepartmentOutlined}
        movies={movies}
        isSwipe
        isLoading={isLoading}
      />
      <SectionBlock
        title="Top 100"
        icon={LeaderboardOutlined}
        movies={movies}
        total={total}
        isLoading={isLoading}
      />
    </Stack>
  );
};

export default HomePage;
