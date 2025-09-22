import "@mui/material/styles";
import type { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    backgroundPrimary: PaletteColor;
    backgroundSecondary: PaletteColor;
  }

  interface PaletteOptions {
    backgroundPrimary?: PaletteColorOptions;
    backgroundSecondary?: PaletteColorOptions;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    iconary: true;
  }
}