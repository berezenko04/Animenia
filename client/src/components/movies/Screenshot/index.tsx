import { Box } from "@mui/material";
import { useSelector } from "react-redux";

// redux
import { themeSelector } from "@/redux/theme/theme.selectors";

type ScreenshotProps = {
  url: string;
  onClick: () => void;
};

const Screenshot: React.FC<ScreenshotProps> = ({ url, onClick }) => {
  const { mode } = useSelector(themeSelector);

  return (
    <Box
      component="img"
      onClick={onClick}
      src={url}
      sx={{
        borderRadius: "10px",
        boxShadow: mode === "light" ? "0 4px 4px 0 rgba(229, 229, 229, 0.25)" : null,
        height: { xs: 180, md: 150 },
        width: "100%",
        cursor: "pointer",
      }}
    />
  );
};

export default Screenshot;
