import { Stack, Typography, type SxProps } from "@mui/material";

// icons
import { Favorite } from "@mui/icons-material";

type RatingProps = {
  rating: number;
  sx?: SxProps;
};

const Rating: React.FC<RatingProps> = ({ rating, sx }) => {
  return (
    <Stack
      sx={{
        borderRadius: "5px",
        p: "5px 10px",
        flexDirection: "row",
        alignItems: "center",
        width: "max-content",
        gap: 1,
        ...sx,
      }}
    >
      <Favorite sx={{ color: "primary.main", width: 18, height: 18 }} />
      <Typography color="primary">{rating}</Typography>
    </Stack>
  );
};

export default Rating;
