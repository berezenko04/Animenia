import { Grid, Stack, Typography } from "@mui/material";

// components
import CustomContainer from "../Container";
import Logo from "@/components/ui/Logo";
import CustomLink from "@/components/common/CustomLink";
import ScrollUpButton from "@/components/ui/buttons/ScrollUpButton";
import FooterSocials from "@/components/ui/FooterSocials";

// data
import { footerMenuGenres } from "@/data";

const Footer: React.FC = () => {
  return (
    <Stack sx={{ backgroundColor: "white.main", py: "50px" }}>
      <CustomContainer>
        <Grid container spacing={5} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 4 }}>
            <Stack sx={{ gap: 2.5 }}>
              <Stack>
                <Logo disableLink />
                <Typography color="text.secondary">Copyright © Animenia All rights reserved</Typography>
              </Stack>
              <FooterSocials />
            </Stack>
          </Grid>
          <Grid size={{ xs: 2 }}>
            <Stack sx={{ gap: 1.5 }}>
              <Typography variant="h3">Genres</Typography>
              <Stack sx={{ gap: 0.75 }}>
                {footerMenuGenres.map(({ title, href }, idx) => (
                  <CustomLink sx={{ fontSize: 13 }} to={href} key={idx}>
                    {title}
                  </CustomLink>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 5 }}>
            <Stack sx={{ gap: 1.5 }}>
              <Typography variant="h3">About Us</Typography>
              <Typography>
                All videos on the site are provided for information only and do not involve downloading.
              </Typography>
              <Typography>Technical support and assistance to users: example@animenia.com</Typography>
              <Typography>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: "auto" }} sx={{ ml: "auto" }}>
            <ScrollUpButton />
          </Grid>
        </Grid>
      </CustomContainer>
    </Stack>
  );
};

export default Footer;
