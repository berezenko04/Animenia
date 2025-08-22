import { Container, type SxProps } from "@mui/material";

type ContainerProps = {
  sx?: SxProps;
  children: React.ReactNode;
};

const CustomContainer: React.FC<ContainerProps> = ({ sx, children }) => {
  return (
    <Container
      disableGutters
      sx={{ maxWidth: "1200px !important", height: "100%", display: "flex", flexDirection: "column", px: 4, ...sx }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
