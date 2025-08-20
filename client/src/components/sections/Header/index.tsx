import { Stack } from "@mui/material";

// components
import CustomContainer from "../Container";
import ThemeSwitchButton from "@/components/ui/buttons/ThemeSwitchButton";
import CustomLink from "@/components/common/CustomLink";

// data
import { menu } from "@/data";

// icons
import { PersonOutlineOutlined } from "@mui/icons-material";

const Header: React.FC = () => {
  return (
    <Stack component="header" sx={{ py: 2.5, backgroundColor: "white.main" }}>
      <CustomContainer>
        <Stack sx={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 4 }}>
          <CustomLink to="/" sx={{ fontSize: 24, fontWeight: 500, color: "primary.main" }}>
            Animenia
          </CustomLink>
          <Stack component="nav" sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
            {menu.map(({ title, href }, idx) => (
              <CustomLink key={idx} to={href}>
                {title}
              </CustomLink>
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
