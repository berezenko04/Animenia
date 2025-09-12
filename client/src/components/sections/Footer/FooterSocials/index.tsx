import { Stack } from "@mui/material";

// components
import CustomLink from "@/components/common/CustomLink";

// data
import { socials } from "@/data";

const FooterSocials: React.FC = () => {
  return (
    <Stack sx={{ flexDirection: "row", gap: 2 }}>
      {socials.map(({ icon: Icon, href }, idx) => (
        <CustomLink to={href} key={idx}>
          <Icon
            sx={{ color: "text.secondary", transition: "all .25s ease-in-out", "&:hover": { color: "primary.main" } }}
          />
        </CustomLink>
      ))}
    </Stack>
  );
};

export default FooterSocials;
