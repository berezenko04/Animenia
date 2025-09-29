import { Stack } from "@mui/material";

// components
import NewsList from "@/components/navigation/Sidebar/news/List";
import Reviews from "@/components/navigation/Sidebar/reviews/List";
import SocialGradientFillButton from "@/components/ui/buttons/SocialGradientFillButton";

const Sidebar: React.FC = () => {
  return (
    <Stack sx={{ gap: 4 }}>
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
