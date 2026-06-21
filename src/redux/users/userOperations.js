import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi } from "../api";

export const registerUser = createAsyncThunk("users/registerUser", async ({ email, password }, thunkAPI) => {
  try {
    const response = await privateApi.post("/register", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk("users/loginUser", async ({ email, password }, thunkAPI) => {
  try {
    const response = await privateApi.post("/login", { email, password });
    return response.data; // { user, accessToken }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
