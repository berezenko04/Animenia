import { Stack } from "@mui/material";

// components
import ProfileInfo from "@/components/features/profile/Info";
import ProfileSessions from "@/components/features/profile/Sessions";

const ProfilePage: React.FC = () => {
  return (
    <Stack sx={{ gap: 6 }}>
      <ProfileInfo />
      <ProfileSessions />
    </Stack>
  );
};

export default ProfilePage;
