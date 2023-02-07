import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { GeoSliceState } from "./types";

const initialState: GeoSliceState = {
    country: '',
    city: ''
}

export const GeoSlice = createSlice({
    name: 'geo',
    initialState,
    reducers: {
        setCountry(state, action: PayloadAction<string>) {
            state.country = action.payload;
        },
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        }
    }
})

export const { setCountry, setCity } = GeoSlice.actions;

export default GeoSlice.reducer;