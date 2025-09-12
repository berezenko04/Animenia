import { Grid, Stack, Typography } from "@mui/material";
import Lightbox, { type SlideImage } from "yet-another-react-lightbox";
import { useState } from "react";

// components
import MovieScreenshot from "../Screenshot";

// types
import type { MovieScreenshot as MovieScreenshotType } from "@/api/movie/movie.types";

type ScreenshotsProps = {
  screenshots: MovieScreenshotType[];
};

const Screenshots: React.FC<ScreenshotsProps> = ({ screenshots }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);

  const handleClick = (idx: number) => {
    setOpen(true);
    setIndex(idx);
  };

  return (
    <Stack sx={{ gap: 1.5 }}>
      <Typography variant="h3">Screenshots</Typography>
      <Grid container sx={{ alignItems: "center" }} spacing={4}>
        {screenshots.map(({ id, url }, idx) => (
          <Grid key={id} size={{ xs: 4 }}>
            <MovieScreenshot url={url} onClick={() => handleClick(idx)} />
          </Grid>
        ))}
      </Grid>
      <Lightbox
        open={open}
        index={index}
        close={() => setOpen(false)}
        slides={screenshots.map((i) => ({ src: i.url })) as SlideImage[]}
      />
    </Stack>
  );
};

export default Screenshots;
