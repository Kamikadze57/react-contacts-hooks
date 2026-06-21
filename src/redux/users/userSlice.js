import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "./userOperations";
const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};
const usersSlice = createSlice({
  name: "users",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
      });
  },
});

export const userReducer = usersSlice.reducer;
