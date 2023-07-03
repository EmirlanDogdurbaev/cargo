import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../api";

export const signin = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await axios.post(api + "api/login/", {
      username,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    window.location.reload();

    return { username, token };
  }
);

export const signupShipper = createAsyncThunk(
  "auth/signup",
  async ({ username, password, email }) => {
    const response = await axios.post(api + "api/register/", {
      username,
      password,
      email,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    window.location.reload();

    return { username, email, token };
  }
);


const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("jwtToken") || null,
    username: localStorage.getItem("username") || null,
    email: localStorage.getItem("email") || null,
    company_name: localStorage.getItem("company_name") || null,
    company_address: localStorage.getItem("company_address") || null,
    descriptions: localStorage.getItem("descriptions") || null,
    bank_account: localStorage.getItem("bank_account") || null,
    dot_number: localStorage.getItem("dot_number") || null,
    status: "idle",
    error: null,
  },
});

export default authSlice.reducer;
