import { alpha, Box, Stack, Typography } from "@mui/material";

// theme
import theme from "@/theme";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

// icons
import { FavoriteOutlined } from "@mui/icons-material";

const MovieCard: React.FC<MovieCardType> = ({ posterUrl, title, rating, genres }) => {
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
        maxWidth: 270,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
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
      <Stack
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: alpha(theme.palette.white.main, 0.8),
          backdropFilter: "blur(5px)",
          borderRadius: "5px",
          p: "5px 10px",
          flexDirection: "row",
          alignItems: "center",
          gap: 1,
        }}
      >
        <FavoriteOutlined sx={{ color: "primary.main", width: 18, height: 18 }} />
        <Typography color="primary">{rating}</Typography>
      </Stack>
    </Box>
  );
};

export default MovieCard;
