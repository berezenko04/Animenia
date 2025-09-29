import { alpha, Button, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

// api
import MovieService from "@/api/movie/movie.service";

// redux
import { authSelector } from "@/redux/auth/auth.selectors";

// icons
import { Favorite, FavoriteBorder } from "@mui/icons-material";

type LikeButtonProps = {
  movieId: string;
  isLiked: boolean;
  onChange: (i: boolean) => void;
};

const LikeButton: React.FC<LikeButtonProps> = ({ movieId, isLiked, onChange }) => {
  const theme = useTheme();
  const { isAuth } = useSelector(authSelector);

  const handleClick = async () => {
    if (!isAuth) {
      return toast.error("Please login first");
    }

    const nextValue = !isLiked;
    onChange(nextValue);

    try {
      await (nextValue ? MovieService.addLike(movieId) : MovieService.removeLike(movieId));
    } catch {
      onChange(isLiked);
    }
  };

  return (
    <Button
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        backgroundColor: alpha(theme.palette.backgroundPrimary.main, 0.8),
        backdropFilter: "blur(5px)",
      }}
      onClick={handleClick}
      variant="iconary"
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
