import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import Header from "@/components/navigation/Header";
import CustomContainer from "@/components/ui/layout/Container";
import Footer from "@/components/navigation/Footer";

const NotFoundLayout: React.FC = () => {
  return (
    <Stack sx={{ minHeight: "100svh" }}>
      <Header />
      <CustomContainer sx={{ py: 6, flex: 1 }}>
        <Stack sx={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
          <Outlet />
        </Stack>
      </CustomContainer>
      <Footer />
    </Stack>
  );
};

export default NotFoundLayout;
