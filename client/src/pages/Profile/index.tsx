import { Stack } from "@mui/material";

// components
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileSessions from "@/components/profile/ProfileSessions";

const ProfilePage: React.FC = () => {
  return (
    <Stack sx={{ gap: 6 }}>
      <ProfileInfo />
      <ProfileSessions />
    </Stack>
  );
};

export default ProfilePage;
