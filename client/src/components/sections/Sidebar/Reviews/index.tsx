import { Box, Stack } from "@mui/material";

// components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import CustomLink from "@/components/common/CustomLink";

// icons
import { ReviewsOutlined } from "@mui/icons-material";

const Reviews: React.FC = () => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Reviews" icon={ReviewsOutlined} />
      <Stack sx={{ gap: 2.5, px: 2.5, flexDirection: { xs: "column", sm: "row", lg: "column" } }}>
        {[...Array(3)].map((_, idx) => (
          <CustomLink sx={{ width: "100%" }} key={idx} to="#">
            <Box
              key={idx}
              component="img"
              src={`/review${idx + 1}.webp`}
              sx={{
                borderRadius: "10px",
                height: { xs: 160, lg: 120 },
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
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
