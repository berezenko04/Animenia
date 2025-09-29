import { Stack } from "@mui/material";

// components
import GenreSection from "@/components/features/movies/GenreSection";

// data
import { genres } from "@/data";

const GenresPage: React.FC = () => {
  return (
    <Stack sx={{ gap: 4 }}>
      {genres.map((genre) => (
        <GenreSection genre={genre} />
      ))}
    </Stack>
  );
};

export default GenresPage;
