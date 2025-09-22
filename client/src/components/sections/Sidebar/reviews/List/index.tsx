import { Stack } from "@mui/material";

// components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import ReviewListItem from "@/components/sections/Sidebar/reviews/ListItem";

// utils
import { repeat } from "@/utils/repeat";

// icons
import { ReviewsOutlined } from "@mui/icons-material";

const Reviews: React.FC = () => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Reviews" icon={ReviewsOutlined} />
      <Stack sx={{ gap: 2.5, px: 2.5, flexDirection: { xs: "column", sm: "row", lg: "column" } }}>
        {repeat(3, (idx) => (
          <ReviewListItem key={idx} imgSrc={`/review${idx + 1}.webp`} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Reviews;
