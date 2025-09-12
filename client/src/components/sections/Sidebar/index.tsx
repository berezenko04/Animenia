import { Stack } from "@mui/material";

// components
import NewsList from "@/components/news/NewsList";
import Reviews from "@/components/common/Reviews";
import SocialGradientFillButton from "@/components/ui/buttons/SocialGradientFillButton";

const Sidebar: React.FC = () => {
  return (
    <Stack sx={{ gap: 6 }}>
      <NewsList />
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
