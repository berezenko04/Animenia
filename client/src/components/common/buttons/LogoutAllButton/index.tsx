import { ButtonBase } from "@mui/material";
import toast from "react-hot-toast";

// api
import AuthService from "@/api/auth/auth.service";


const LogoutAllButton = () => {
  const handleClick = async () => {
    const ok = window.confirm("Are you sure you want to logout all sessions?");
    if (!ok) return;

    const result = await AuthService.logoutAll();
    toast.success(result.message);
    window.location.href = "/login";
  };

  return (
    <ButtonBase sx={{ color: "primary.main", textDecoration: "underline" }} onClick={handleClick}>
      Logout All
    </ButtonBase>
  );
};

export default LogoutAllButton;
