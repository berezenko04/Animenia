import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AuthSliceState } from "./types";

const initialState: AuthSliceState = {
    isAuth: false
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuth(state, action) {
            state.isAuth = action.payload;
        }
    }
})

export const { setIsAuth } = AuthSlice.actions;

export default AuthSlice.reducer;