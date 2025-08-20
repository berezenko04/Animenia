import { createTheme } from "@mui/material";

const baseTheme = createTheme({
  palette: {
    primary: { main: "#DA1414", light: "#FBD0D0" },
    background: { default: "#F6F6F6" },
    text: { primary: "#404156", secondary: "#9F9F9F" },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

const theme = createTheme(baseTheme, {
  components: {
    MuiButton: {
      styleOverrides: {},
    },
    MuiTextField: {
      defaultProps: {
        inputProps: {
          autoComplete: "new-password",
        },
      },
      styleOverrides: {
        root: {
          "& input[readonly]": {
            pointerEvents: "none",
            cursor: "default",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-readOnly": {
            // backgroundColor: baseTheme.palette.divider,
            cursor: "default",
            pointerEvents: "none",
          },
        },
        select: {
          "&:focus": {
            backgroundColor: baseTheme.palette.divider,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          "&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6":
            {
              color: baseTheme.palette.primary.main,
            },
        },
        h1: {
          fontSize: 24,
        },
        h2: {
          fontSize: 18,
        },
        h3: {
          fontSize: 16,
        },
        paragraph: { fontSize: 16, lineHeight: "135%" },
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineAlways: {
          color: baseTheme.palette.primary.main,
        },
      },
    },
    MuiInputBase: {
      defaultProps: {
        inputProps: {
          autoComplete: "off",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: baseTheme.palette.primary.main,
        },
      },
    },
  },
});

export default theme;
