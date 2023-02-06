import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProfileSliceState } from "./types";
import { links } from "@/components/SettingsBlock";

const initialState: ProfileSliceState = {
    tab: links[0]
}

export const ProfileSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setTab(state, action: PayloadAction<string>) {
            state.tab = action.payload;
        }
    }
})

export const { setTab } = ProfileSlice.actions;

export default ProfileSlice.reducer;