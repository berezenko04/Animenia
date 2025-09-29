import { Button, ButtonBase, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

// components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import ChangeNameModal from "@/components/common/Modals/ChangeNameModal";
import ChangePasswordModal from "@/components/common/Modals/ChangePasswordModal";
import ProfileAvatar from "../Avatar";

// redux
import { userSelector } from "@/redux/user/user.selectors";

// icons
import { EditOutlined, LockOutlined, MailOutlined, PersonOutlineOutlined } from "@mui/icons-material";

const Info = () => {
  const [isChangeNameModalOpened, setIsChangeNameModalOpened] = useState<boolean>(false);
  const [isChangePasswordModalOpened, setIsChangePasswordModalOpened] = useState<boolean>(false);

  const { user } = useSelector(userSelector);

  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Profile" icon={PersonOutlineOutlined} />
      <Stack sx={{ flexDirection: "row", gap: { xs: 2, md: 4 } }}>
        <ProfileAvatar />
        <Stack sx={{ gap: { xs: 1, md: 2.5 } }}>
          <Stack sx={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
            <Typography variant="h1">
              {user?.firstName} {user?.lastName}
            </Typography>
            <Button onClick={() => setIsChangeNameModalOpened(true)} variant="iconary" color="primary" size="small">
              <EditOutlined />
            </Button>
          </Stack>
          <Stack sx={{ gap: { xs: 1, md: 2 }, svg: { width: 20, height: 20, color: "primary.main" } }}>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
              <MailOutlined />
              <Typography color="primary.main">{user?.email}</Typography>
            </Stack>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
              <LockOutlined />
              <ButtonBase
                onClick={() => setIsChangePasswordModalOpened(true)}
                sx={{
                  fontSize: 14,
                  color: "text.main",
                  transition: "all .3s ease-in-out",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Change Password
              </ButtonBase>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <ChangeNameModal isOpened={isChangeNameModalOpened} handleClose={() => setIsChangeNameModalOpened(false)} />
      <ChangePasswordModal
        isOpened={isChangePasswordModalOpened}
        handleClose={() => setIsChangePasswordModalOpened(false)}
      />
    </Stack>
  );
};

export default Info;
