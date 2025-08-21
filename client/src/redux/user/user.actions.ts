import { createAsyncThunk } from "@reduxjs/toolkit";

// service
import UserService from "@/api/user/user.service";

// types
import type { User } from "./user.types";

export const fetchMe = createAsyncThunk<User, void, { rejectValue: { message: string } }>(
  "users/me",
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserService.get();
      return response;
    } catch (err: any) {
      const data = err?.response?.data;
      return rejectWithValue({
        message: data?.message || "Unknown error",
      });
    }
  }
);
