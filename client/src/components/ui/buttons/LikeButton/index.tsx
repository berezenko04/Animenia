import { alpha, Button } from "@mui/material";

// icons
import { Favorite, FavoriteBorder } from "@mui/icons-material";

// theme
import theme from "@/theme";

type LikeButtonProps = {
  isLiked?: boolean;
};

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked = false }) => {
  return (
    <Button
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: alpha(theme.palette.backgroundPrimary.main, 0.8),
        backdropFilter: "blur(5px)",
        borderRadius: "5px",
        width: 32,
        height: 32,
        minWidth: 0,
      }}
      size="small"
    >
      {isLiked ? (
        <Favorite fontSize="small" sx={{ color: "primary.main" }} />
      ) : (
        <FavoriteBorder fontSize="small" sx={{ color: "primary.main" }} />
      )}
    </Button>
  );
};

export default LikeButton;
