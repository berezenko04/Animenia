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
      <CustomContainer>
        <Stack sx={{ minHeight: "calc(100svh - 80px)", py: 3 }}>
          <Outlet />
        </Stack>
      </CustomContainer>
      <Footer />
    </Stack>
  );
};

export default PrimaryLayout;
