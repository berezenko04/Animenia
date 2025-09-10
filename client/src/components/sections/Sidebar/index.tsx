import { Stack } from "@mui/material";

// components
import News from "@/components/common/News";
import Reviews from "@/components/common/Reviews";
import InstagramButton from "@/components/ui/buttons/InstagramButton";
import TelegramButton from "@/components/ui/buttons/TelegramButton";
import YoutubeButton from "@/components/ui/buttons/YoutubeButton";

const Sidebar: React.FC = () => {
  return (
    <Stack sx={{ gap: 6 }}>
      <News />
      <Reviews />
      <Stack sx={{ gap: 1.5 }}>
        <InstagramButton />
        <TelegramButton />
        <YoutubeButton />
      </Stack>
    </Stack>
  );
};

export default Sidebar;
