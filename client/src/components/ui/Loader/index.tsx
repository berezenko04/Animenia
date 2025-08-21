import { Box, keyframes } from "@mui/material";

// components
import Logo from "../Logo";

// theme
import theme from "@/theme";

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
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <Box
        sx={{
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
