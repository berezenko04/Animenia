import { ButtonBase } from "@mui/material";
import toast from "react-hot-toast";

// api
import AuthService from "@/api/auth/auth.service";

// utils
import { catchError } from "@/utils/catchError";

const LogoutAllButton = () => {
  const handleClick = async () => {
    const ok = window.confirm("Are you sure you want to logout all sessions?");
    if (!ok) return;

    try {
      const result = await AuthService.logoutAll();
      toast.success(result.message);
      window.location.href = "/login";
    } catch (err) {
      catchError(err);
    }
  };

  return (
    <ButtonBase sx={{ color: "primary.main" }} onClick={handleClick}>
      Logout All
    </ButtonBase>
  );
};

export default LogoutAllButton;
