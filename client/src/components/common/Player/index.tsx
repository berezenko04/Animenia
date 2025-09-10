import ReactPlayer from "react-player";

// types
import type { ReactPlayerProps } from "react-player/types";

const Player: React.FC<ReactPlayerProps> = ({ ...props }) => {
  return (
    <ReactPlayer
      width="100%"
      height="100%"
      style={{ minHeight: 450, borderRadius: "10px", overflow: "hidden" }}
      {...props}
    />
  );
};

export default Player;
