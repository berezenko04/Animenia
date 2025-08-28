import { Box, Stack } from "@mui/material";

// components
import MoviesBlockHead from "@/components/common/MoviesBlockHead";

// icons
import { ReviewsOutlined } from "@mui/icons-material";

const SidebarReviews: React.FC = () => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title="Reviews" icon={ReviewsOutlined} />
      <Stack sx={{ gap: 2.5, px: 2.5 }}>
        {[...Array(3)].map((_, idx) => (
          <Box
            key={idx}
            component="img"
            src={`/review${idx + 1}.png`}
            sx={{ borderRadius: "10px", height: 120, objectFit: "cover", objectPosition: "center" }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default SidebarReviews;
