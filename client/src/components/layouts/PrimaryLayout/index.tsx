import { Grid, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import Header from "@/components/sections/Header";
import CustomContainer from "@/components/sections/Container";
import Footer from "@/components/sections/Footer";
import Sidebar from "@/components/sections/Sidebar";

const PrimaryLayout: React.FC = () => {
  return (
    <Stack sx={{ minHeight: "100svh" }}>
      <Header />
      <CustomContainer
        sx={{ flex: 1, display: "flex", flexDirection: "column", py: { xs: 3, md: 6 } }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 9 }}>
            <Outlet />
          </Grid>
          <Grid size={{ xs: 12, lg: 3 }}>
            <Sidebar />
          </Grid>
        </Grid>
      </CustomContainer>
      <Footer />
    </Stack>
  );
};

export default PrimaryLayout;
