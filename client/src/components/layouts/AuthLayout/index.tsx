import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import Header from "@/components/sections/Header";
import CustomContainer from "@/components/sections/Container";

const AuthLayout: React.FC = () => {
  return (
    <Stack
      sx={{
        minHeight: "100svh",
        backgroundImage: `url("/image.png")`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-300pcenter",
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
