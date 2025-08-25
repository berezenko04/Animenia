import { alpha, Box, Stack, Typography } from "@mui/material";

// types
import type { MovieCard } from "@/api/movie/movie.types";

// theme
import theme from "@/theme";

const MovieCard: React.FC<MovieCard> = ({ posterUrl, title, rating, genres }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${posterUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "10px",
        overflow: "hidden",
        minHeight: 350,
        maxWidth: 255,
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          p: 2.5,
          gap: 1.5,
          width: "100%",
          backgroundColor: alpha(theme.palette.white.main, 0.9),
          backdropFilter: "blur(2.5px)",
        }}
      >
        <Typography
          variant="h3"
          sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "97%" }}
        >
          {title}
        </Typography>
        <Typography fontSize={12}>{genres.join(", ")}</Typography>
      </Stack>
    </Box>
  );
};

export default MovieCard;
