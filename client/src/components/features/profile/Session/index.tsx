import { ButtonBase, capitalize, Grid, Stack, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// api
import AuthService from "@/api/auth/auth.service";

// types
import type { Session } from "@/api/auth/auth.types";
import type { BaseResponseData } from "@/types/base.types";

// icons
import { DeleteOutlined, DesktopWindowsOutlined, PhoneAndroidOutlined, TabletMacOutlined } from "@mui/icons-material";

type SessionProps = {
  session: Session;
};

const Session: React.FC<SessionProps> = ({ session }) => {
  const queryClient = useQueryClient();

  const iconsMap: Record<string, React.ElementType> = {
    desktop: DesktopWindowsOutlined,
    mobile: PhoneAndroidOutlined,
    tablet: TabletMacOutlined,
  };

  const getIcon = () => {
    const Icon = iconsMap[session.deviceType ?? "desktop"] ?? DesktopWindowsOutlined;
    return <Icon sx={{ width: { xs: 40, md: 60 }, height: "auto", color: "text.secondary" }} />;
  };

  const deleteSessionMutation = useMutation({
    mutationFn: (sessionId: string) => AuthService.deleteSession(sessionId),
    onSuccess: (result: BaseResponseData, sessionId: string) => {
      toast.success(result.message);
      queryClient.setQueryData(["sessions"], (old: Session[] = []) => old.filter((s) => s.id !== sessionId));

      if (session.isCurrent) window.location.href = "/login";
    },
  });

  const handleDeleteSession = async () => {
    const ok = window.confirm("Are you sure you want to delete this session?");
    if (!ok) return;

    deleteSessionMutation.mutate(session.id);
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
