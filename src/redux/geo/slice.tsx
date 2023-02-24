import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { GeoSliceState } from "./types";

const initialState: GeoSliceState = {
    country: '',
}

export const GeoSlice = createSlice({
    name: 'geo',
    initialState,
    reducers: {
        setCountry(state, action: PayloadAction<string>) {
            state.country = action.payload;
        }
    }
})

export const { setCountry } = GeoSlice.actions;

export default GeoSlice.reducer;