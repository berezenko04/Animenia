import { ButtonBase, capitalize, Grid, Stack, Typography } from "@mui/material";

// types
import type { Session } from "@/api/auth/auth.types";

// icons
import { DeleteOutlined, DesktopWindowsOutlined, PhoneAndroidOutlined, TabletMacOutlined } from "@mui/icons-material";

type ProfileSessionsItemProps = {
  session: Session;
};

const ProfileSessionsItem: React.FC<ProfileSessionsItemProps> = ({ session }) => {
  const iconsMap: Record<string, React.ElementType> = {
    desktop: DesktopWindowsOutlined,
    mobile: PhoneAndroidOutlined,
    tablet: TabletMacOutlined,
  };

  const getIcon = (deviceType?: string) => {
    const Icon = iconsMap[deviceType ?? "desktop"] ?? DesktopWindowsOutlined;
    return <Icon sx={{ width: 60, height: 60, color: "text.secondary" }} />;
  };

  return (
    <Stack
      sx={{
        backgroundColor: "white.main",
        borderRadius: "10px",
        overflow: "hidden",
        flexDirection: "row",
        alignItems: "stretch",
      }}
    >
      <Grid container sx={{ px: 4, py: 4.5, alignItems: "center", flex: 1 }} spacing={3}>
        <Grid size={{ xs: 6 }}>
          <Stack sx={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
            {getIcon()}
            <Stack>
              <Typography variant="h3">OS: {capitalize(session.os)}</Typography>
              <Typography>Browser: {capitalize(session.browser)}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 3 }}>
          <Typography sx={{ color: "text.secondary" }}>
            Date: {new Date(session.createdAt).toLocaleDateString("en-GB")}
          </Typography>
        </Grid>
        <Grid size={{ xs: 3 }}>
          {session.isCurrent ? (
            <Typography color="primary.main">Current Session</Typography>
          ) : (
            <Typography color="text.secondary">IP: {session.ipAddress}</Typography>
          )}
        </Grid>
      </Grid>
      <ButtonBase
        sx={{
          backgroundColor: "primary.light",
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DeleteOutlined sx={{ color: "primary.main" }} />
      </ButtonBase>
    </Stack>
  );
};

export default ProfileSessionsItem;
