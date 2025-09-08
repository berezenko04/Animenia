import { Grid, Stack, Typography } from "@mui/material";

// components
import MovieScreenshot from "../MovieScreenshot";

// types
import type { MovieScreenshot as MovieScreenshotType } from "@/api/movie/movie.types";

type MovieScreenshotsProps = {
  screenshots: MovieScreenshotType[];
};

const MovieScreenshots: React.FC<MovieScreenshotsProps> = ({ screenshots }) => {
  return (
    <Stack sx={{ gap: 1.5 }}>
      <Typography variant="h3">Screenshots</Typography>
      <Grid container sx={{ alignItems: "center" }} spacing={4}>
        {screenshots.map(({ id, url }) => (
          <Grid key={id} size={{ xs: 4 }}>
            <MovieScreenshot url={url} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default MovieScreenshots;
