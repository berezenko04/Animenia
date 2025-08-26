import { Stack } from "@mui/material";

// components
import LatestNews from "@/components/common/LatestNews";
import SidebarReviews from "@/components/common/SidebarReviews";
import InstagramButton from "@/components/ui/buttons/InstagramButton";
import TelegramButton from "@/components/ui/buttons/TelegramButton";
import YoutubeButton from "@/components/ui/buttons/YoutubeButton";

const Sidebar: React.FC = () => {
  return (
    <Stack sx={{ gap: 6 }}>
      <LatestNews />
      <SidebarReviews />
      <Stack sx={{ gap: 1.5 }}>
        <InstagramButton />
        <TelegramButton />
        <YoutubeButton />
      </Stack>
    </Stack>
  );
};

export default Sidebar;
