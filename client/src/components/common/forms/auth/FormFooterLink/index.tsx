import { Stack, Typography } from "@mui/material";

// components
import CustomLink from "@/components/common/CustomLink";

type FormFooterLinkProps = {
  text: string;
  linkText: string;
  linkHref: string;
};

const FormFooterLink: React.FC<FormFooterLinkProps> = ({ text, linkText, linkHref }) => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.25,
        "*": { fontSize: 14 },
      }}
    >
      <Typography>{text}</Typography>
      <CustomLink to={linkHref} sx={{ color: "primary.main", textDecoration: "underline" }}>
        {linkText}
      </CustomLink>
    </Stack>
  );
};

export default FormFooterLink;
