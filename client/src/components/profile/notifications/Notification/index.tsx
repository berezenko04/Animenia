import { Stack, Switch, Typography } from "@mui/material";

type NotificationProps = {
  title: string;
};

const Notification: React.FC<NotificationProps> = ({ title }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "backgroundPrimary.main",
        p: 2,
        borderRadius: "10px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
      }}
    >
      <Typography fontSize={16}>{title}</Typography>
      <Switch />
    </Stack>
  );
};

export default Notification;
