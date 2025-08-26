import { Stack } from "@mui/material";

// components
import MoviesBlockHead from "@/components/ui/MoviesBlockHead";

// icons
import { ReviewsOutlined } from "@mui/icons-material";

const SidebarReviews: React.FC = () => {
  return (
    <Stack>
      <MoviesBlockHead title="Reviews" icon={ReviewsOutlined} />
    </Stack>
  );
};

export default SidebarReviews;
