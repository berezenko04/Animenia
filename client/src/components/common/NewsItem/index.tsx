import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from "@mui/material";
import { useState } from "react";

// components
import CustomLink from "../CustomLink";

// utils
import { formatGenres } from "@/utils/formatGenres";

// types
import type { Genre } from "@/types/enums.types";

// icons
import { ExpandMore } from "@mui/icons-material";

type NewsItemProps = {
  title: string;
  slug: string;
  genres: Genre[];
  posterUrl: string;
  releaseYear: number;
};

const NewsItem: React.FC<NewsItemProps> = ({ title, slug, genres, posterUrl, releaseYear }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Accordion
      disableGutters
      onChange={() => setExpanded((prev) => !prev)}
      sx={{
        boxShadow: "none",
        overflow: "hidden",
        backgroundColor: "transparent",
        p: 0,
      }}
    >
      <AccordionSummary expandIcon={<ExpandMore />} sx={{ p: 0 }}>
        <Stack sx={{ gap: 0.5 }}>
          <Stack>
            <Typography sx={expanded ? { color: "primary.main" } : {}}>{title}</Typography>
            <Typography fontSize={12}>{formatGenres(genres)}</Typography>
          </Stack>
          <Typography fontSize={12}>{releaseYear}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <CustomLink to={`/movies/${slug}`} style={{ color: "inherit" }}>
          <Stack sx={{ gap: 1 }}>
            <Box
              component="img"
              src={posterUrl}
              sx={{ height: 300, borderRadius: "10px", objectFit: "cover", objectPosition: "center" }}
            />
          </Stack>
        </CustomLink>
      </AccordionDetails>
    </Accordion>
  );
};

export default NewsItem;
