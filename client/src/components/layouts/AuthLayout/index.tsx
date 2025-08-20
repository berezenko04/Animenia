import { Container, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <Container disableGutters sx={{ maxWidth: 1200, px: 4 }}>
      <Stack sx={{ minHeight: "100svh", py: 2 }}>
        <Outlet />
      </Stack>
    </Container>
  );
};

export default AuthLayout;
