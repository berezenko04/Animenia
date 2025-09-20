import { Box, Drawer, Stack, IconButton, useTheme, alpha } from "@mui/material";

// components
import UnderlinedLink from "@/components/ui/links/UnderlinedLink";

// icons
import { Close } from "@mui/icons-material";

// data
import { menu } from "@/data";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            backdropFilter: "blur(8px)",
          },
        },
        paper: {
          sx: {
            backgroundColor: alpha(theme.palette.background.default, 0.95),
          },
        },
      }}
      sx={{ height: "100%" }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100svh",
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{ display: "flex", alignSelf: "flex-end", flexShrink: 0 }}
        >
          <Close />
        </IconButton>

        <Stack component="nav" alignItems="center" justifyContent="center" flex={1} spacing={3}>
          {menu.map(({ title, href }, idx) =>
            href ? (
              <UnderlinedLink
                sx={{ fontWeight: 500, fontSize: 24 }}
                key={idx}
                to={href}
                onClick={onClose}
              >
                {title}
              </UnderlinedLink>
            ) : (
              <UnderlinedLink
                sx={{ fontWeight: 500, fontSize: 24 }}
                key={idx}
                to="#"
                // onClick={handleRandomMovie}
              >
                {title}
              </UnderlinedLink>
            )
          )}
        </Stack>
      </Box>
    </Drawer>
  );
};

export default MobileMenu;
