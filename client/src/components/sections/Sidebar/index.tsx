import { Stack } from "@mui/material";

// components
import News from "@/components/common/News";
import Reviews from "@/components/common/Reviews";
import SocialGradientFillButton from "@/components/ui/buttons/SocialGradientFillButton";

const Sidebar: React.FC = () => {
  return (
    <Stack sx={{ gap: 6 }}>
      <News />
      <Reviews />
      <Stack sx={{ gap: 1.5 }}>
        <SocialGradientFillButton variant="instagram" href="https://instagram.com" />
        <SocialGradientFillButton variant="telegram" href="https://desktop.telegram.org/" />
        <SocialGradientFillButton variant="youtube" href="https://youtube.com" />
      </Stack>
    </Stack>
  );
};

export default Sidebar;
