import { Grid, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

// components
import Header from "@/components/sections/Header";
import CustomContainer from "@/components/sections/Container";
import Footer from "@/components/sections/Footer";
import ProfileMenu from "@/components/profile/Menu";

const ProfileLayout: React.FC = () => {
  return (
    <Stack sx={{ minHeight: "100svh" }}>
      <Header />
      <CustomContainer
        sx={{ flex: 1, display: "flex", flexDirection: "column", py: { xs: 3, md: 6 } }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 3 }}>
            <ProfileMenu />
          </Grid>
          <Grid size={{ xs: 12, lg: 9 }}>
            <Outlet />
          </Grid>
        </Grid>
      </CustomContainer>
      <Footer />
    </Stack>
  );
};

export default ProfileLayout;
