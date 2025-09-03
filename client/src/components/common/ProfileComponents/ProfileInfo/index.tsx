import { ButtonBase, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";

// components
import MoviesBlockHead from "@/components/common/MoviesBlockHead";
import EditButton from "@/components/ui/buttons/EditButton";
import ProfileAvatar from "../ProfileAvatar";

// redux
import { userSelector } from "@/redux/user/user.selectors";

// icons
import { LockOutlined, MailOutlined, PersonOutlineOutlined } from "@mui/icons-material";

const ProfileInfo = () => {
  const { user } = useSelector(userSelector);

  return (
    <Stack sx={{ gap: 2.5 }}>
      <MoviesBlockHead title="Profile" icon={PersonOutlineOutlined} />
      <Stack sx={{ flexDirection: "row", gap: 4 }}>
        <ProfileAvatar />
        <Stack sx={{ gap: 2.5 }}>
          <Stack sx={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
            <Typography variant="h1">
              {user?.firstName} {user?.lastName}
            </Typography>
            <EditButton />
          </Stack>
          <Stack sx={{ gap: 2, svg: { width: 20, height: 20, color: "primary.main" } }}>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
              <MailOutlined />
              <Typography color="primary.main">{user?.email}</Typography>
              {/* <ButtonBase sx={{ color: "text.secondary" }}>[Change Email]</ButtonBase> */}
            </Stack>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
              <LockOutlined />
              <Typography color="text.secondary">Change Password</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProfileInfo;
