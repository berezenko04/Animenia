import { alpha, Box, Stack, Typography, useTheme } from "@mui/material";

// components
import CustomLink from "@/components/common/CustomLink";
import Rating from "@/components/ui/Rating";

// types
import type { MovieCard as MovieCardType } from "@/api/movie/movie.types";

// utils
import { formatGenres } from "@/utils/formatGenres";

const MovieCard: React.FC<MovieCardType> = ({ posterUrl, title, slug, rating, genres }) => {
  const theme = useTheme();

  return (
    <Box
      component={CustomLink}
      to={`/movies/${slug}`}
      sx={{
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
        display: "block",
        height: 350,
        maxWidth: 270,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${posterUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease",
          "&:hover": {
            transform: "scale(1.06) translateY(-5px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          },
        }}
      />
      <Stack
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          p: 2.5,
          gap: 1,
          zIndex: 10,
          backgroundColor: alpha(theme.palette.backgroundPrimary.main, 0.9),
          backdropFilter: "blur(2.5px)",
        }}
      >
        <Typography
          variant="h3"
          sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }}
        >
          {title}
        </Typography>
        <Typography fontSize={12}>{formatGenres(genres)}</Typography>
      </Stack>
      <Rating
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: alpha(theme.palette.backgroundPrimary.main, 0.8),
          backdropFilter: "blur(5px)",
        }}
        rating={rating}
      />
    </Box>
  );
};

export default MovieCard;
