import { Button } from "@mui/material";

type SocialGradientFillButtonProps = {
  background: string;
  title: string;
  href: string;
};

const SocialGradientFillButton: React.FC<SocialGradientFillButtonProps> = ({ title, href, background }) => {
  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      sx={{
        background,
        boxShadow: "box-shadow: 0 4px 4px 0 rgba(229, 229, 229, 0.25)",
        color: "#FFFFFF",
        borderRadius: "10px",
        py: 2,
        textTransform: "none",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      {title}
    </Button>
  );
};

export default SocialGradientFillButton;
