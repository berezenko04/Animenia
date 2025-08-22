import { Stack } from "@mui/material";

// components
import CustomContainer from "../Container";
import Logo from "@/components/ui/Logo";
import ThemeSwitchButton from "@/components/ui/buttons/ThemeSwitchButton";
import UnderlinedLink from "@/components/ui/UnderlinedLink";
import CustomLink from "@/components/common/CustomLink";

// data
import { menu } from "@/data";

// icons
import { PersonOutlineOutlined } from "@mui/icons-material";

const Header: React.FC = () => {
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
              to="/login"
              sx={{
                backgroundColor: "background.default",
                width: 40,
                height: 40,
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                "&:hover": {
                  backgroundColor: "gray.main",
                },
              }}
            >
              <PersonOutlineOutlined />
            </CustomLink>
          </Stack>
        </Stack>
      </CustomContainer>
    </Stack>
  );
};

export default Header;
