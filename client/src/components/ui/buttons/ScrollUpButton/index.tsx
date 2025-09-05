import { Button } from "@mui/material";

// icons
import { KeyboardArrowUp } from "@mui/icons-material";

const ScrollUpButton: React.FC = () => {
  return (
    <Button variant="contained" size="small" sx={{ minWidth: 0, width: 40, height: 40 }} onClick={() => scrollTo(0, 0)}>
      <KeyboardArrowUp sx={{ color: "backgroundPrimary.main" }} />
    </Button>
  );
};

export default ScrollUpButton;
