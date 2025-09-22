import { ButtonBase, capitalize, Grid, Stack, Typography } from "@mui/material";
import toast from "react-hot-toast";

// api
import AuthService from "@/api/auth/auth.service";

// types
import type { Session } from "@/api/auth/auth.types";

// icons
import { DeleteOutlined, DesktopWindowsOutlined, PhoneAndroidOutlined, TabletMacOutlined } from "@mui/icons-material";

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
    return <Icon sx={{ width: { xs: 40, md: 60 }, height: "auto", color: "text.secondary" }} />;
  };

  const handleDeleteSession = async () => {
    const ok = window.confirm("Are you sure you want to delete this session?");
    if (!ok) return;

    const { id: sessionId, isCurrent } = session;

    const result = await AuthService.deleteSession(sessionId);
    toast.success(result.message);

    if (isCurrent) {
      window.location.href = "/login";
    } else {
      setSessions((prev) => prev.filter((s) => s.id !== sessionId));
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
      <Grid
        container
        sx={{ p: { xs: 2, md: 4 }, alignItems: { xs: "flex-start", md: "center" }, flex: 1 }}
        spacing={{ xs: 1, md: 3 }}
      >
        <Grid size={{ xs: 12, sm: 6 }}>
          <Stack sx={{ flexDirection: "row", gap: { xs: 2, md: 4 }, alignItems: "center" }}>
            {getIcon()}
            <Stack sx={{ width: "100%" }}>
              <Typography variant="h3">{capitalize(session.os)}</Typography>
              <Typography sx={{ color: "text.secondary" }}>{capitalize(session.browser)}</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }} sx={{ marginLeft: "auto" }}>
          <Typography sx={{ color: "text.secondary", textAlign: { xs: "start", sm: "end" } }}>
            Date: {new Date(session.createdAt).toLocaleDateString("en-GB")}
          </Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
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
          px: { xs: 1.5, md: 3 },
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
