import { Stack } from "@mui/material";

// components
import MoviesBlockHead from "@/components/common/MoviesBlockHead";
import NotificationItem from "../NotificationItem";

// icons
import { NotificationsNoneOutlined } from "@mui/icons-material";

// data
import { notificationOptions } from "@/data";

const Notifications = () => {
  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title="Notifications" icon={NotificationsNoneOutlined} />
      <Stack sx={{ gap: 1.5 }}>
        {notificationOptions.map((option, idx) => (
          <NotificationItem key={idx} title={option} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Notifications;
