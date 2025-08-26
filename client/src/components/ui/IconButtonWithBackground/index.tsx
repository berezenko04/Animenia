import { Button, type SvgIconProps } from "@mui/material";

type IconButtonWithBackgroundProps = {
  icon: React.ElementType<SvgIconProps>;
  onClick: () => void;
};

const IconButtonWithBackground: React.FC<IconButtonWithBackgroundProps> = ({ icon: Icon, onClick }) => {
  return (
    <Button
      sx={{
        width: 32,
        height: 32,
        minWidth: 0,
        backgroundColor: "primary.light",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <Icon sx={{ width: 20, height: 20, color: "primary.main" }} />
    </Button>
  );
};

export default IconButtonWithBackground;
