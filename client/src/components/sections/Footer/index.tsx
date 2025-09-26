import { capitalize, Grid, Stack, Typography } from "@mui/material";

// components
import CustomContainer from "../Container";
import Logo from "@/components/common/Logo";
import CustomLink from "@/components/common/CustomLink";
import ScrollUpButton from "@/components/ui/buttons/ScrollUpButton";
import FooterSocials from "@/components/sections/Footer/FooterSocials";

// data
import { genres } from "@/data";

const Footer: React.FC = () => {
  return (
    <Stack sx={{ backgroundColor: "backgroundPrimary.main", py: { xs: 3, lg: 6 } }}>
      <CustomContainer>
        <Grid container spacing={5} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, sm: 8, lg: 4 }}>
            <Stack sx={{ gap: 2.5 }}>
              <Stack>
                <Logo disableLink />
                <Typography color="text.secondary">
                  Copyright © Animenia All rights reserved
                </Typography>
              </Stack>
              <FooterSocials />
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, sm: 4, lg: 2 }}>
            <Stack sx={{ gap: 1.5 }}>
              <Typography variant="h3">Genres</Typography>
              <Stack component="nav" sx={{ gap: 0.75 }}>
                {genres.slice(0, 6).map((genre, idx) => (
                  <CustomLink sx={{ fontSize: 13 }} to="/genres" key={idx}>
                    {capitalize(genre.toLowerCase())}
                  </CustomLink>
                ))}
              </Stack>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Stack sx={{ gap: 1.5 }}>
              <Typography variant="h3">About Us</Typography>
              <Typography>
                All videos on the site are provided for information only and do not involve
                downloading.
              </Typography>
              <Typography>
                Technical support and assistance to users: example@animenia.com
              </Typography>
              <Typography>
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of
                Service apply.
              </Typography>
            </Stack>
          </Grid>
          <Grid size={{ xs: "auto" }} sx={{ display: { xs: "none", lg: "grid" }, ml: "auto" }}>
            <ScrollUpButton />
          </Grid>
        </Grid>
      </CustomContainer>
    </Stack>
  );
};

export default Footer;
