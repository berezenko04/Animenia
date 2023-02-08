import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import anime from './anime/slice'
import news from './news/slice'
import auth from './auth/slice'
import profile from './profile/slice'
import geo from './geo/slice'
import pagination from './pagination/slice'

export const store = configureStore({
    reducer: {
        anime,
        news,
        auth,
        profile,
        geo,
        pagination
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();