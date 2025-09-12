import { Stack } from "@mui/material";

// components
import ProfileInfo from "@/components/profile/Info";
import ProfileSessions from "@/components/profile/Sessions";

const ProfilePage: React.FC = () => {
  return (
    <Stack sx={{ gap: 6 }}>
      <ProfileInfo />
      <ProfileSessions />
    </Stack>
  );
};

export default ProfilePage;
