import { Typography } from "@mui/material";

// components
import CustomLink from "@/components/ui/links/CustomLink";

interface LogoProps {
  disableLink?: boolean;
}

const Logo: React.FC<LogoProps> = ({ disableLink = false }) => {
  if (disableLink) {
    return <Typography sx={{ fontSize: 24, fontWeight: 500, color: "primary.main" }}>Animenia</Typography>;
  }

  return (
    <CustomLink to="/" sx={{ fontSize: 24, fontWeight: 500, color: "primary.main" }}>
      Animenia
    </CustomLink>
  );
};

export default Logo;
