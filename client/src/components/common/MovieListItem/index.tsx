import { Box, Button, Stack, Typography } from "@mui/material";

// components
import Rating from "@/components/ui/Rating";
import LikeButton from "@/components/ui/buttons/LikeButton";

// utils
import { formatGenres } from "@/utils/formatGenres";

// types
import type { Genre } from "@/types/enums.types";

type MovieListItemProps = {
  id: string;
  slug: string;
  posterUrl: string;
  title: string;
  genres: Genre[];
  rating: number;
  description: string;
  isListItem?: boolean;
};

const MovieListItem: React.FC<MovieListItemProps> = ({
  id,
  slug,
  posterUrl,
  title,
  genres,
  rating,
  description,
  isListItem = true,
}) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        gap: 4,
        padding: isListItem ? 2.5 : 0,
        backgroundColor: isListItem ? "white.main" : "transparent",
        borderRadius: isListItem ? "10px" : 0,
        boxShadow: isListItem ? "0 4px 4px 0 rgba(229, 229, 229, 0.25)" : "none",
      }}
    >
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          minWidth: 270,
          minHeight: 350,
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <Box
          component="img"
          src={posterUrl}
          sx={{
            position: "relative",
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
            transition: "transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s ease",
            "&:hover": {
              transform: "scale(1.06) translateY(-5px)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            },
          }}
        />
        <LikeButton />
      </Box>
      <Stack sx={{ gap: 2.5, alignItems: "flex-start" }}>
        <Stack sx={{ gap: 1 }}>
          <Typography variant="h1">{title}</Typography>
          <Typography color="text.secondary">{formatGenres(genres)}</Typography>
          <Rating sx={{ backgroundColor: isListItem ? "background.default" : "white.main" }} rating={rating} />
        </Stack>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 10,
            fontSize: 16,
          }}
        >
          {description}
        </Typography>
        {isListItem && (
          <Button href={`/movies/${slug}`} variant="contained" color="primary">
            Watch
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default MovieListItem;
