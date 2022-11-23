import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { fetchLogin, checkLogin } from "./asyncActions";
import { ILogin, ILoginState } from "./types";

const initialState: ILoginState = {
  user: null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  isUserLogin: false,
  isLoading: false,
  error: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout(state) {
      state.isUserLogin = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: {
    [fetchLogin.fulfilled.type]: (state, action: PayloadAction<ILogin>) => {
      state.user = action.payload;
      state.isUserLogin = true;
      state.error = "";
      state.isLoading = false;
    },
    [fetchLogin.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchLogin.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [checkLogin.fulfilled.type]: (state, action: PayloadAction<ILogin>) => {
      state.user = action.payload;
      state.isUserLogin = true;
      state.error = "";
      state.isLoading = false;
    },
    [checkLogin.rejected.type]: (state, action: PayloadAction<ILogin>) => {
      state.isUserLogin = false;
      state.isLoading = false;
      state.error = "Error"
    },
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
