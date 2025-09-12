import { Box, Stack } from "@mui/material";

// components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import CustomLink from "../CustomLink";

// icons
import { ReviewsOutlined } from "@mui/icons-material";

const Reviews: React.FC = () => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Reviews" icon={ReviewsOutlined} />
      <Stack sx={{ gap: 2.5, px: 2.5 }}>
        {[...Array(3)].map((_, idx) => (
          <CustomLink key={idx} to="#">
            <Box
              key={idx}
              component="img"
              src={`/review${idx + 1}.webp`}
              sx={{
                borderRadius: "10px",
                height: 120,
                objectFit: "cover",
                width: "100%",
                objectPosition: "center",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                },
              }}
            />
          </CustomLink>
        ))}
      </Stack>
    </Stack>
  );
};

export default Reviews;
