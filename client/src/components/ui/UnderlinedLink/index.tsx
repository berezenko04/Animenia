import type { LinkProps } from "@mui/material";

// components
import CustomLink from "@/components/common/CustomLink";

// theme
import theme from "@/theme";

const UnderlinedLink: React.FC<LinkProps<typeof CustomLink>> = ({ sx, ...props }) => {
  return (
    <CustomLink
      sx={{
        position: "relative",
        textDecoration: "none",
        color: theme.palette.text.primary,
        transition: "color 0.2s ease-in-out",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: -2,
          width: "0%",
          height: "2px",
          backgroundColor: theme.palette.primary.main,
          transition: "width 0.3s ease-in-out",
        },
        "&:hover": {
          color: theme.palette.primary.main,
          "&::after": {
            width: "100%",
          },
        },
        ...sx,
      }}
      {...props}
    />
  );
};

export default UnderlinedLink;
