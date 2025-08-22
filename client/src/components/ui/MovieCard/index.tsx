import { Box, Stack } from "@mui/material";

type MovieCardProps = {
  image: string;
};

const MovieCard: React.FC<MovieCardProps> = ({ image }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <Stack></Stack>
    </Box>
  );
};

export default MovieCard;
