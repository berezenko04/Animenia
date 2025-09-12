import { ButtonBase, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

// components
import SectionBlockHead from "@/components/common/SectionBlockHead";
import ChangeNameModal from "@/components/common/modals/ChangeNameModal";
import ChangePasswordModal from "@/components/common/modals/ChangePasswordModal";
import EditButton from "@/components/ui/buttons/EditButton";
import ProfileAvatar from "../Avatar";

// redux
import { userSelector } from "@/redux/user/user.selectors";

// icons
import { LockOutlined, MailOutlined, PersonOutlineOutlined } from "@mui/icons-material";

const Info = () => {
  const [isChangeNameModalOpened, setIsChangeNameModalOpened] = useState<boolean>(false);
  const [isChangePasswordModalOpened, setIsChangePasswordModalOpened] = useState<boolean>(false);

  const { user } = useSelector(userSelector);

  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Profile" icon={PersonOutlineOutlined} />
      <Stack sx={{ flexDirection: "row", gap: 4 }}>
        <ProfileAvatar />
        <Stack sx={{ gap: 2.5 }}>
          <Stack sx={{ flexDirection: "row", gap: 1, alignItems: "center" }}>
            <Typography variant="h1">
              {user?.firstName} {user?.lastName}
            </Typography>
            <EditButton onClick={() => setIsChangeNameModalOpened(true)} />
          </Stack>
          <Stack sx={{ gap: 2, svg: { width: 20, height: 20, color: "primary.main" } }}>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
              <MailOutlined />
              <Typography color="primary.main">{user?.email}</Typography>
            </Stack>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 1.5 }}>
              <LockOutlined />
              <ButtonBase
                onClick={() => setIsChangePasswordModalOpened(true)}
                sx={{ color: "text.main", transition: "all .3s ease-in-out", "&:hover": { color: "primary.main" } }}
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
