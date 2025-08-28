import { Box, Grid, Stack, Typography } from "@mui/material";

// types
import type { MovieScreenshot } from "@/api/movie/movie.types";

type MovieScreenshotsProps = {
  screenshots: MovieScreenshot[];
};

const MovieScreenshots: React.FC<MovieScreenshotsProps> = ({ screenshots }) => {
  return (
    <Stack sx={{ gap: 1.5 }}>
      <Typography variant="h3">Screenshots</Typography>
      <Grid container sx={{ alignItems: "center" }} spacing={4}>
        {screenshots.map((screenshot) => (
          <Grid key={screenshot.id} size={{ xs: 4 }}>
            <Box
              component="img"
              src={screenshot.url}
              sx={{
                borderRadius: "10px",
                boxShadow: "0 4px 4px 0 rgba(229, 229, 229, 0.25)",
                height: 150,
                width: "100%",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default MovieScreenshots;
