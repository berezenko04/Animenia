import { Container } from "@mui/material";

type ContainerProps = {
  children: React.ReactNode;
};

const CustomContainer: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Container disableGutters sx={{ maxWidth: 1200, px: 4 }}>
      {children}
    </Container>
  );
};

export default CustomContainer;
