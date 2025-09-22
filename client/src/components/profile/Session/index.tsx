import { ButtonBase, capitalize, Grid, Stack, Typography } from "@mui/material";
import toast from "react-hot-toast";

// api
import AuthService from "@/api/auth/auth.service";

// types
import type { Session } from "@/api/auth/auth.types";

// utils
import { catchError } from "@/utils/catchError";

// icons
import {
  DeleteOutlined,
  DesktopWindowsOutlined,
  PhoneAndroidOutlined,
  TabletMacOutlined,
} from "@mui/icons-material";

type SessionProps = {
  session: Session;
  setSessions: React.Dispatch<React.SetStateAction<Session[]>>;
};

const Session: React.FC<SessionProps> = ({ session, setSessions }) => {
  const iconsMap: Record<string, React.ElementType> = {
    desktop: DesktopWindowsOutlined,
    mobile: PhoneAndroidOutlined,
    tablet: TabletMacOutlined,
  };

  const getIcon = () => {
    const Icon = iconsMap[session.deviceType ?? "desktop"] ?? DesktopWindowsOutlined;
    return <Icon sx={{ width: 60, height: 60, color: "text.secondary" }} />;
  };

  const handleDeleteSession = async () => {
    const ok = window.confirm("Are you sure you want to delete this session?");
    if (!ok) return;

    const { id: sessionId, isCurrent } = session;

    try {
      const result = await AuthService.deleteSession(sessionId);
      toast.success(result.message);

      if (isCurrent) {
        window.location.href = "/login";
      } else {
        setSessions((prev) => prev.filter((s) => s.id !== sessionId));
      }
    } catch (err) {
      catchError(err);
    }
  };

  return (
    <Stack
      sx={{
        backgroundColor: "backgroundPrimary.main",
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
        onClick={handleDeleteSession}
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

export default Session;
