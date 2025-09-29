import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

// components
import CustomLink from "@/components/ui/links/CustomLink";

// utils
import { formatGenres } from "@/utils/formatGenres";

// types
import type { Genre } from "@/types/enums.types";

// icons
import { ExpandMore } from "@mui/icons-material";

type ListItemProps = {
  title: string;
  slug: string;
  genres: Genre[];
  posterUrl: string;
  releaseYear: number;
};

const ListItem: React.FC<ListItemProps> = ({ title, slug, genres, posterUrl, releaseYear }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Accordion disableGutters onChange={() => setExpanded((prev) => !prev)}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={{
          p: 0,
        }}
      >
        <Stack sx={{ gap: 0.5 }}>
          <Stack>
            <Typography sx={{ fontSize: 15, color: expanded ? "primary.main" : null }}>
              {title}
            </Typography>
            <Typography fontSize={13} color="text.secondary">
              {formatGenres(genres)}
            </Typography>
          </Stack>
          <Typography fontSize={13}>{releaseYear}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0 }}>
        <CustomLink to={`/movies/${slug}`} style={{ color: "inherit" }}>
          <Box
            component="img"
            src={posterUrl}
            sx={{
              height: "100%",
              width: "100%",
              maxWidth: 270,
              borderRadius: "10px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </CustomLink>
      </AccordionDetails>
    </Accordion>
  );
};

export default ListItem;
