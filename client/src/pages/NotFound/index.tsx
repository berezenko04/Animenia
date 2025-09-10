import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ gap: 5, alignItems: "center" }}>
      <Typography variant="h1" fontSize={40}>
        Page not found
      </Typography>
      <Button onClick={() => navigate(-1)} variant="contained" color="primary">
        Go back
      </Button>
    </Stack>
  );
};

export default NotFoundPage;
