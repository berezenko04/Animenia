import { Stack } from "@mui/material";

// components
import ProfileInfo from "@/components/common/ProfileComponents/ProfileInfo";
import ProfileSessions from "@/components/common/ProfileComponents/ProfileSessions";

const ProfilePage: React.FC = () => {
  return (
    <Stack sx={{ gap: 6 }}>
      <ProfileInfo />
      <ProfileSessions />
    </Stack>
  );
};

export default ProfilePage;
