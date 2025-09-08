import { alpha, Box, keyframes, useTheme } from "@mui/material";

// components
import Logo from "../../Logo";

const fade = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.2;
  }
`;

type LoaderProps = {
  size?: number;
};

const Loader: React.FC<LoaderProps> = ({ size = 160 }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100svh",
        width: "100%",
        position: "fixed",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: alpha(theme.palette.background.default, 0.5),
          backdropFilter: "blur(8px)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          width: size,
          height: size,
          animation: `${fade} 2s infinite ease-in-out`,
          userSelect: "none",
        }}
        aria-label="loading"
      >
        <Logo disableLink />
      </Box>
    </Box>
  );
};

export default Loader;
