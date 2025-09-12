import { Button, capitalize } from "@mui/material";

type SocialGradientFillButtonProps = {
  href: string;
  variant: "instagram" | "telegram" | "youtube";
};

const SocialGradientFillButton: React.FC<SocialGradientFillButtonProps> = ({ href, variant }) => {
  const getGradientFill = () => {
    switch (variant) {
      case "instagram":
        return "linear-gradient(93deg, #C000C3 0%, #EE7200 100%)";
      case "telegram":
        return "linear-gradient(93deg, #97C7FF 0%, #0679FF 100%)";
      case "youtube":
        return "linear-gradient(93deg, #DA1414 0%, #9F0000 100%)";
    }
  };

  return (
    <Button
      component="a"
      href={href}
      target="_blank"
      sx={{
        background: getGradientFill(),
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
      {capitalize(variant)}
    </Button>
  );
};

export default SocialGradientFillButton;
