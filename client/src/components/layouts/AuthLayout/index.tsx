import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import Header from "@/components/navigation/Header";
import CustomContainer from "@/components/ui/layout/Container";

const AuthLayout: React.FC = () => {
  return (
    <Stack
      sx={{
        minHeight: "100svh",
        backgroundImage: `url("/wallpaper.webp")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <CustomContainer>
        <Stack sx={{ alignItems: "flex-end", justifyContent: "center", minHeight: "calc(100svh - 80px)", py: 3 }}>
          <Outlet />
        </Stack>
      </CustomContainer>
    </Stack>
  );
};

export default AuthLayout;
