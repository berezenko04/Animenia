import { Box } from "@mui/material";
import YouTube, { type YouTubeProps } from "react-youtube";

const VideoPlayer: React.FC<YouTubeProps> = (props) => {
  return (
    <Box
      sx={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <YouTube
        {...props}
        opts={{
          width: "100%",
          height: "100%",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};

export default VideoPlayer;
