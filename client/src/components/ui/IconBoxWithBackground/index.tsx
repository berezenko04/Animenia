import { Stack, type SvgIconProps } from "@mui/material";

type IconBoxWithBackgroundProps = {
  icon: React.ElementType<SvgIconProps>;
};

const IconBoxWithBackground: React.FC<IconBoxWithBackgroundProps> = ({ icon: Icon }) => {
  return (
    <Stack
      sx={{
        width: 32,
        height: 32,
        backgroundColor: "primary.main",
        borderRadius: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon sx={{ width: 20, height: 20, color: "backgroundPrimary.main" }} />
    </Stack>
  );
};

export default IconBoxWithBackground;
