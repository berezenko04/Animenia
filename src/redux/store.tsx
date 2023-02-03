import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import anime from './anime/slice'

export const store = configureStore({
    reducer: {
        anime
    }

})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();