import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// reducers
import authReducer from "@/redux/auth/auth.slice";
import userReducer from "@/redux/user/user.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
