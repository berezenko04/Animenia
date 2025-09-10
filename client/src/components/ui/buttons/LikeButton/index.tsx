import { alpha, Button, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

// redux
import { authSelector } from "@/redux/auth/auth.selectors";

// icons
import { Favorite, FavoriteBorder } from "@mui/icons-material";

type LikeButtonProps = {
  isLiked?: boolean;
};

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked }) => {
  const theme = useTheme();
  const { isAuth } = useSelector(authSelector);

  const handleClick = async () => {
    if (!isAuth) {
      return toast.error("Please login first");
    }
  };

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
