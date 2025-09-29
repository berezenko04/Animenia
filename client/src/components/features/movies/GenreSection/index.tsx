// components
import SectionBlock from "@/components/ui/layout/SectionBlock";

// hooks
import { useMovies } from "@/hooks/useMovies";

// utils
import { formatGenres } from "@/utils/formatGenres";

// types
import { Genre } from "@/types/enums.types";

// icons
import { AppsOutlined } from "@mui/icons-material";

type GenreSectionProps = {
  genre: Genre;
};

const GenreSection: React.FC<GenreSectionProps> = ({ genre }) => {
  const { movies, total, page, setPage, isLoading } = useMovies({ genre });

  return (
    <SectionBlock
      icon={AppsOutlined}
      title={formatGenres([genre])}
      movies={movies}
      page={page}
      total={total}
      setPage={setPage}
      isLoading={isLoading}
    />
  );
};

export default GenreSection;
