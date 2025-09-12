import { Stack } from "@mui/material";

// components
import Notifications from "@/components/profile/notifications/NotificationsList";

const NotificationsPage: React.FC = () => {
  return (
    <Stack>
      <Notifications />
    </Stack>
  );
};

export default NotificationsPage;
