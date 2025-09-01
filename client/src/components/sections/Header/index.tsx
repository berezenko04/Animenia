import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";

// components
import CustomContainer from "../Container";
import Logo from "@/components/ui/Logo";
import ThemeSwitchButton from "@/components/ui/buttons/ThemeSwitchButton";
import UnderlinedLink from "@/components/ui/UnderlinedLink";
import CustomLink from "@/components/common/CustomLink";

// redux
import { userSelector } from "@/redux/user/user.selectors";
import { authSelector } from "@/redux/auth/auth.selectors";

// data
import { menu } from "@/data";

// icons
import { PersonOutlineOutlined } from "@mui/icons-material";

const Header: React.FC = () => {
  const { user } = useSelector(userSelector);
  const { isAuth } = useSelector(authSelector);

  return (
    <Stack
      component="header"
      sx={{ py: 2.5, backgroundColor: "white.main", boxShadow: "0 4px 4px 0 rgba(229, 229, 229, 0.25)" }}
    >
      <CustomContainer>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 4 }}>
          <Logo />
          <Stack component="nav" sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            {menu.map(({ title, href }, idx) => (
              <UnderlinedLink sx={{ fontWeight: 500 }} key={idx} to={href}>
                {title}
              </UnderlinedLink>
            ))}
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
                  backgroundColor: "gray.main",
                },
              }}
            >
              {isAuth ? (
                <Box
                  component="img"
                  src={user?.avatarUrl}
                  sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
              ) : (
                <PersonOutlineOutlined />
              )}
            </CustomLink>
          </Stack>
        </Stack>
      </CustomContainer>
    </Stack>
  );
};

export default Header;
