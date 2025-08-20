import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import Header from "@/components/sections/Header";
import CustomContainer from "@/components/sections/Container";

const AuthLayout: React.FC = () => {
  return (
    <Stack sx={{ minHeight: "100svh" }}>
      <Header />
      <CustomContainer>
        <Outlet />
      </CustomContainer>
    </Stack>
  );
};

export default AuthLayout;
