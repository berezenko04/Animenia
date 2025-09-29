import { Box, Stack } from "@mui/material";
import { useLocation } from "react-router";

// components
import SectionBlockHead from "@/components/ui/layout/SectionBlockHead";
import CustomLink from "@/components/ui/links/CustomLink";

// icons
import { SettingsOutlined } from "@mui/icons-material";

// data
import { profileMenu } from "@/data";

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <Stack sx={{ gap: 2.5 }}>
      <SectionBlockHead title="Settings" icon={SettingsOutlined} />
      <Stack component="nav" sx={{ gap: 2.5, px: 2.5 }}>
        {profileMenu.map((i, idx) => {
          const isActive = location.pathname === i.href;

          return (
            <CustomLink
              key={idx}
              to={i.href}
              sx={{ display: "flex", gap: 1, alignItems: "center", color: isActive ? "primary.main" : "inherit" }}
            >
              {isActive && <Box sx={{ width: 6, height: 6, borderRadius: "100%", backgroundColor: "primary.main" }} />}
              {i.title}
            </CustomLink>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Menu;
