import { createAsyncThunk } from "@reduxjs/toolkit";
import { $authHost, $host } from "../../axios";
import { ILogin, ILoginProps } from "./types";

export const fetchLogin = createAsyncThunk("login/fetchLogin", async ({ phone, password }: ILoginProps, thunkAPI) => {
  try {
    const { data } = await $host.post<ILogin>("login", {
      phone: phone,
      password: password,
    });
    localStorage.setItem("token", data.token);
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});

export const checkLogin = createAsyncThunk("check/checkLogin", async (_, thunkAPI) => {
  try {
    const { data } = await $authHost.get<ILogin>("check");
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
  }
});
