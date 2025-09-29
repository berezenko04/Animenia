import { alpha, Stack, Typography, useTheme } from "@mui/material";

// components
import FormFooterLink from "../FormFooterLink";

type AuthFormLayoutProps = {
  title: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
};

const AuthFormLayout: React.FC<AuthFormLayoutProps> = ({
  title,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}) => {
  const theme = useTheme();

  return (
    <Stack
      sx={{
        p: { xs: "20px", sm: "20px 40px 40px", md: "40px 60px 60px" },
        backgroundColor: alpha(theme.palette.backgroundPrimary.main, 0.7),
        backdropFilter: "blur(10px)",
        borderRadius: "10px",
        maxWidth: 540,
        width: "100%",
      }}
    >
      <Stack sx={{ gap: 2.5 }}>
        <Typography variant="h1" sx={{ fontSize: { xs: 24, sm: 38 }, textAlign: "center" }}>
          {title}
        </Typography>
        {children}
        <FormFooterLink text={footerText} linkText={footerLinkText} linkHref={footerLinkHref} />
      </Stack>
    </Stack>
  );
};

export default AuthFormLayout;
