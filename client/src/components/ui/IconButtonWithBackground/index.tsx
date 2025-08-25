import { Button, type SvgIconProps } from "@mui/material";

type IconButtonWithBackgroundProps = {
  icon: React.ElementType<SvgIconProps>;
};

const IconButtonWithBackground: React.FC<IconButtonWithBackgroundProps> = ({ icon: Icon }) => {
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
    >
      <Icon sx={{ width: 20, height: 20, color: "primary.main" }} />
    </Button>
  );
};

export default IconButtonWithBackground;
