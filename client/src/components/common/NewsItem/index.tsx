import { Stack, Typography } from "@mui/material";
import { Link } from "react-router";

// types
import type { Genre } from "@/types/enums.types";

type NewsItemProps = {
  title: string;
  slug: string;
  genres: Array<Genre>;
  releaseYear: number;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, slug, genres, releaseYear }) => {
  return (
    <Link to={`/movies/${slug}`}>
      <Stack sx={{ gap: 0.5 }}>
        <Stack>
          <Typography color="primary">{title}</Typography>
          <Typography fontSize={12}>{genres.join(", ")}</Typography>
        </Stack>
        <Typography fontSize={12}>{releaseYear}</Typography>
      </Stack>
    </Link>
  );
};

export default NewsItem;
