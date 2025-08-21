import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// actions
import { fetchMe } from "./user.actions";

// types
import { Statuses } from "@/types/enums.types";
import type { User, UserInitialState } from "./user.types";

const initialState: UserInitialState = {
  user: null,
  status: Statuses.LOADING,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMe.pending, (state) => {
        state.status = Statuses.LOADING;
      })
      .addCase(fetchMe.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.status = Statuses.SUCCESS;
      })
      .addCase(fetchMe.rejected, (state) => {
        state.status = Statuses.ERROR;
      });
  },
});

export default userSlice.reducer;
