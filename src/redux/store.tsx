import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import anime from './anime/slice'
import news from './news/slice'
import auth from './auth/slice'
import profile from './profile/slice'

export const store = configureStore({
    reducer: {
        anime,
        news,
        auth,
        profile
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();