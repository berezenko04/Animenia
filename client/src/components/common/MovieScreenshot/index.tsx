import { Box } from "@mui/material";
import { useSelector } from "react-redux";

// redux
import { themeSelector } from "@/redux/theme/theme.selectors";

type MovieScreenshotProps = {
  url: string;
};

const MovieScreenshot: React.FC<MovieScreenshotProps> = ({ url }) => {
  const { mode } = useSelector(themeSelector);

  return (
    <Box
      component="img"
      src={url}
      sx={{
        borderRadius: "10px",
        boxShadow: mode === "light" ? "0 4px 4px 0 rgba(229, 229, 229, 0.25)" : null,
        height: 150,
        width: "100%",
      }}
    />
  );
};

export default MovieScreenshot;
