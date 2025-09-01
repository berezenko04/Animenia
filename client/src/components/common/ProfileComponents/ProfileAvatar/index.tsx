import { alpha, Avatar, Box } from "@mui/material";
import { useSelector } from "react-redux";

// redux
import { userSelector } from "@/redux/user/user.selectors";

// theme
import theme from "@/theme";

// icons
import { CameraAltOutlined } from "@mui/icons-material";

const ProfileAvatar: React.FC = () => {
  const { user } = useSelector(userSelector);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: 160,
        height: 160,
        borderRadius: "100%",
        cursor: "pointer",
      }}
    >
      <Avatar src={user?.avatarUrl} alt="avatar" sx={{ width: "100%", height: "100%" }} />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 10,
          backgroundColor: alpha(theme.palette.secondary.main, 0.6),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CameraAltOutlined sx={{ width: 60, height: 60, color: "white.main" }} />
      </Box>
    </Box>
  );
};

export default ProfileAvatar;
