import { Box, IconButton, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";

// components
import CustomContainer from "../Container";
import Logo from "@/components/common/Logo";
import MobileMenu from "@/components/common/MobileMenu";
import ThemeSwitchButton from "@/components/common/Buttons/ThemeSwitchButton";
import UnderlinedLink from "@/components/ui/links/UnderlinedLink";
import CustomLink from "@/components/common/CustomLink";

// redux
import { userSelector } from "@/redux/user/user.selectors";
import { authSelector } from "@/redux/auth/auth.selectors";
import { themeSelector } from "@/redux/theme/theme.selectors";

// utils
import { handleRandomMovie } from "@/utils/handleRandomMovie";

// data
import { menu } from "@/data";

// icons
import { MenuOpenOutlined, PersonOutlineOutlined } from "@mui/icons-material";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState<boolean>(false);

  const { user } = useSelector(userSelector);
  const { mode } = useSelector(themeSelector);
  const { isAuth } = useSelector(authSelector);

  return (
    <Stack
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        left: 0,
        py: 2.5,
        zIndex: 100,
        backgroundColor: "backgroundPrimary.main",
        boxShadow: mode === "light" ? 1 : null,
      }}
    >
      <CustomContainer>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Logo />
          <Stack
            component="nav"
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            {menu.map(({ title, href }, idx) =>
              href ? (
                <UnderlinedLink sx={{ fontWeight: 500 }} key={idx} to={href}>
                  {title}
                </UnderlinedLink>
              ) : (
                <UnderlinedLink sx={{ fontWeight: 500 }} key={idx} to="#" onClick={handleRandomMovie(navigate)}>
                  {title}
                </UnderlinedLink>
              )
            )}
          </Stack>
          <Stack sx={{ flexDirection: "row", gap: 1 }}>
            <ThemeSwitchButton />
            <CustomLink
              to={isAuth ? "profile" : "/login"}
              sx={{
                backgroundColor: "background.default",
                width: 40,
                height: 40,
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",

                "&:hover": {
                  backgroundColor: "backgroundSecondary.main",
                },
              }}
            >
              {isAuth ? (
                <Box
                  component="img"
                  src={user?.avatarUrl}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              ) : (
                <PersonOutlineOutlined />
              )}
            </CustomLink>
            <IconButton onClick={() => setIsMobileMenuOpened(true)} sx={{ display: { xs: "flex", md: "none" } }}>
              <MenuOpenOutlined />
            </IconButton>
          </Stack>
        </Stack>
        <MobileMenu open={isMobileMenuOpened} onClose={() => setIsMobileMenuOpened(false)} />
      </CustomContainer>
    </Stack>
  );
};

export default Header;
