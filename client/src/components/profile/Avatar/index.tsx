import { alpha, Avatar as MuiAvatar, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useRef, useState, type ChangeEvent } from "react";
import toast from "react-hot-toast";

// api
import UserService from "@/api/user/user.service";

// redux
import { userSelector } from "@/redux/user/user.selectors";

// utils
import { catchError } from "@/utils/catchError";

// theme
import theme from "@/theme";

// icons
import { CameraAltOutlined } from "@mui/icons-material";

const Avatar: React.FC = () => {
  const { user } = useSelector(userSelector);

  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64 = reader.result as string;
      setPreview(base64);

      try {
        const result = await UserService.setAvatar(base64);
        toast.success(result.message);
      } catch (err) {
        catchError(err);
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <Box
      onClick={() => inputRef.current?.click()}
      sx={{
        position: "relative",
        overflow: "hidden",
        width: { xs: 80, sm: 120, lg: 160 },
        height: { xs: 80, sm: 120, lg: 160 },
        borderRadius: "100%",
        cursor: "pointer",
      }}
    >
      <MuiAvatar
        src={preview || user?.avatarUrl}
        alt="avatar"
        sx={{ width: "100%", height: "100%" }}
      />
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 10,
          backgroundColor: alpha(theme.palette.secondary.main, 0.4),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CameraAltOutlined sx={{ width: 48, height: 48, color: "backgroundPrimary.main" }} />
      </Box>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Box>
  );
};

export default Avatar;
