import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthSliceState } from "./types";
import { getAuthFromLS } from "@/utils/getAuthFromLS";

const initialState: AuthSliceState = {
    isAuth: getAuthFromLS(),
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload;
        }
    }
})

export const { setIsAuth } = AuthSlice.actions;

export default AuthSlice.reducer;