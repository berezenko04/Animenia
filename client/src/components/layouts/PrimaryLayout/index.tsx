import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import Header from "@/components/sections/Header";
import CustomContainer from "@/components/sections/Container";
import Footer from "@/components/sections/Footer";

const PrimaryLayout: React.FC = () => {
  return (
    <Stack sx={{ minHeight: "100svh" }}>
      <Header />
      <CustomContainer sx={{ flex: 1, display: "flex", flexDirection: "column", py: 6 }}>
        <Outlet />
      </CustomContainer>
      <Footer />
    </Stack>
  );
};

export default PrimaryLayout;
