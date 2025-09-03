import { Stack, Switch, Typography } from "@mui/material";

type NotificationItemProps = {
  title: string;
};

const NotificationItem: React.FC<NotificationItemProps> = ({ title }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "white.main",
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

export default NotificationItem;
