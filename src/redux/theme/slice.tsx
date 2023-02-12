import { getThemeFromLS } from "@/utils/getThemeFromLS";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ThemeSliceState } from "./types";

const initialState: ThemeSliceState = {
    theme: getThemeFromLS()
}

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<string>) {
            state.theme = action.payload;
        }
    }
})

export const { setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;