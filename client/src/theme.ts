import { createTheme, type ThemeOptions } from "@mui/material";

const breakpoints = {
  values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1440 },
};

const basePalette = (mode: "light" | "dark") => ({
  mode,
  primary: {
    main: mode === "light" ? "#DA1414" : "#DEDEDE",
    light: mode === "light" ? "#FBD0D0" : "#121212",
  },
  secondary: {
    main: mode === "light" ? "#404156" : "#FFFFFF",
  },
  background:
    mode === "light"
      ? { default: "#F6F6F6" }
      : { default: "#1E1E1E", paper: "#2A2A2A" },
  divider: "#E5E5E5",
  text:
    mode === "light"
      ? { primary: "#404156", secondary: "#9F9F9F" }
      : { primary: "#FFFFFF", secondary: "#B3B3B3" },
    error: {
      main: "#DA1414",
      light: mode === "light" ? "#FBD0D0" : "#DA1414"
    },
});

const extendedPalette = (mode: "light" | "dark") => ({
  backgroundPrimary: { main: mode === "light" ? "#FFFFFF" : "#262626" },
  backgroundSecondary: { main: "#D9D9D9" },
});

const components: ThemeOptions["components"] = {
      MuiTextField: {
        defaultProps: {
          inputProps: { autoComplete: "new-password" },
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
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({theme}) => ({
            height: 52,
            backgroundColor: theme.palette.background.default,
            borderRadius: "10px",
            "& .MuiOutlinedInput-notchedOutline": { borderWidth: 0 },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: 0,
            },
          }),
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
          root: {
            variants: [
              {
                props: { variant: 'iconary' },
                style: {
                  width: 32, 
                  height: 32,
                  minWidth: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '5px'
                }
              },
            ],
            textTransform: "none", 
            fontWeight: 400, 
            fontSize: 16,
          },
          contained: { borderRadius: "10px" },
          sizeMedium: { padding: "8px 32px" },
          sizeLarge: { padding: "12px inherit" },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            "&.MuiInputBase-readOnly": {
              cursor: "default",
              pointerEvents: "none",
            },
          },
          standard: {
            padding: 0
          },
          select: {
            fontSize: 14
          }
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: ({theme}) =>  ({
            "&.MuiTypography-h1, &.MuiTypography-h2, &.MuiTypography-h3, &.MuiTypography-h4, &.MuiTypography-h5, &.MuiTypography-h6":
              {
                color: theme.palette.primary.main,
                fontWeight: 500,
              },
          }),
          h1: ({ theme }) => ({  
            fontSize: "18px",
            [theme.breakpoints.up("sm")]: {
              fontSize: "24px",
            },
          }),
          h2: { fontSize: 18 },
          h3: { fontSize: 16 },
          body1: { fontSize: 14, lineHeight: "135%" },
          body2: { fontSize: 13, lineHeight: "130%" },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: ({ theme }) => ({
            textDecoration: "none",
            color: theme.palette.text.primary,
            "&:hover": {
              color: theme.palette.primary.main,
              transition: "all 0.2s ease-in-out",
            },
          }),
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: ({ theme }) => ({ color: theme.palette.secondary.main }),
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root:  ({theme}) => ({
            width: 40,
            height: 40,
            borderRadius: "10px",
            backgroundColor: theme.palette.backgroundPrimary.main,
            fontSize: 16,

            "&.Mui-selected": {
              backgroundColor: theme.palette.backgroundPrimary.main,
              color: theme.palette.primary.main,
            },

            "&:hover": {
              backgroundColor: `${theme.palette.backgroundPrimary.main} !important`,
            },
          }),
        },
      },
      MuiModal: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&.MuiModal-root": {
              margin: "24px",

              [theme.breakpoints.down("md")]: {
                margin: "16px",
              },

              [theme.breakpoints.down("sm")]: {
                margin: 0,
              },
            },
            "&.MuiMenu-root": {
              margin: "0",
            },
            "& *": {
              outline: "none !important",
            },
          }),
        },
      },
      MuiSkeleton: {
        styleOverrides: {
          rounded: {
            borderRadius: "10px",
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            backgroundColor: "transparent",
            boxShadow: "none",
            "&::before": { display: "none" },
            "--Paper-overlay": "none !important",
            padding: 0,
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            "& .MuiAccordionSummary-content": {
              marginTop: 0
            },
          },
        },
      }
}

const getTheme = (mode: "light" | "dark") => {
  const theme = createTheme({
    palette: {
      ...basePalette(mode),
      ...extendedPalette(mode),
    },
    breakpoints,
    components,
  });

  return theme;
};


export default getTheme;
