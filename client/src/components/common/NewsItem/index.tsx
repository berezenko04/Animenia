import { Stack, Typography } from "@mui/material";

// components
import CustomLink from "../CustomLink";

// types
import type { Genre } from "@/types/enums.types";

type NewsItemProps = {
  title: string;
  slug: string;
  genres: Genre[];
  releaseYear: number;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, slug, genres, releaseYear }) => {
  return (
    <CustomLink to={`/movies/${slug}`} style={{ color: "inherit" }}>
      <Stack sx={{ gap: 0.5 }}>
        <Stack>
          <Typography color="primary">{title}</Typography>
          <Typography fontSize={12}>{genres.join(", ")}</Typography>
        </Stack>
        <Typography fontSize={12}>{releaseYear}</Typography>
      </Stack>
    </CustomLink>
  );
};

export default NewsItem;
