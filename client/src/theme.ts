import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: { main: "#DA1414", light: "#FBD0D0" },
    secondary: { main: "#404156" },
    background: { default: "#F6F6F6" },
    text: { primary: "#404156", secondary: "#9F9F9F" },
  },
  breakpoints: {
    values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1440 },
  },
});

const extendedPalette = {
  white: baseTheme.palette.augmentColor({ color: { main: "#FFFFFF" }, name: "white" }),
  gray: baseTheme.palette.augmentColor({ color: { main: "#D9D9D9" }, name: "gray" }),
};

const theme = createTheme(baseTheme, {
  palette: {
    ...extendedPalette,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        inputProps: { autoComplete: "new-password" },
      },
      styleOverrides: {
        root: {
          "& input[readonly]": { pointerEvents: "none", cursor: "default" },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: 52,
          backgroundColor: baseTheme.palette.background.default,
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": { borderWidth: 0 },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderWidth: 0 },
        },
        input: {
          padding: "15px",
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          marginRight: 0,
          marginLeft: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", fontWeight: 400, fontSize: 16 },
        contained: { borderRadius: "10px" },

        sizeLarge: { paddingTop: "12px", paddingBottom: "12px" },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-readOnly": { cursor: "default", pointerEvents: "none" },
        },
        select: { "&:focus": { backgroundColor: baseTheme.palette.divider } },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6":
            {
              color: baseTheme.palette.primary.main,
              fontWeight: 500,
            },
        },
        h1: { fontSize: 24 },
        h2: { fontSize: 18 },
        h3: { fontSize: 16 },
        body1: { fontSize: 14, lineHeight: "135%" },
        body2: { fontSize: 13, lineHeight: "130%" },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: baseTheme.palette.text.primary,
          "&:hover": { color: baseTheme.palette.primary.main, transition: "all 0.2s ease-in-out" },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: { root: { color: baseTheme.palette.secondary.main } },
    },
  },
});

export default theme;
