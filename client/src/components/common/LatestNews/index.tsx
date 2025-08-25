import { Stack } from "@mui/material";

// components
import MoviesBlockHead from "@/components/ui/MoviesBlockHead";

// icons
import { ArticleOutlined } from "@mui/icons-material";

const LatestNews: React.FC = () => {
  return (
    <Stack>
      <MoviesBlockHead title="Latest News" icon={ArticleOutlined} />
    </Stack>
  );
};

export default LatestNews;
