import { createSlice } from "@reduxjs/toolkit";

// types
import type { ThemeInitialState } from "./theme.types";

const initialState: ThemeInitialState = {
  mode: (localStorage.getItem("theme") as ThemeInitialState["mode"]) || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
