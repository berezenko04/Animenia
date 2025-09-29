import { Stack, Typography } from "@mui/material";

// components
import CustomLink from "@/components/ui/links/CustomLink";

// icons
import { GitHub } from "@mui/icons-material";

const Author: React.FC = () => {
  return (
    <Stack
      component={CustomLink}
      to="https://github.com/berezenko04"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ flexDirection: "row", gap: 1, alignItems: "center" }}
    >
      <GitHub fontSize="small" />
      <Typography sx={{ textDecoration: "underline" }}>Developed by berezenko04</Typography>
    </Stack>
  );
};

export default Author;
