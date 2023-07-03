import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../api";

export const signupCompany = createAsyncThunk(
  "auth/signup",
  async ({
    username,
    password,
    email,
    company_name,
    company_address,
    descriptions,
    bank_account,
    dot_number,
  }) => {
    const response = await axios.post(api + "api/company/register/", {
      user: {
        username,
        password,
        email,
      },
      company_name,
      company_address,
      descriptions  ,
      bank_account,
      dot_number,
    });
    const token = response.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("username", username);
    localStorage.setItem("company_name", company_name);
    localStorage.setItem("company_address", company_address);
    localStorage.setItem("descriptions", descriptions);
    localStorage.setItem("bank_account", bank_account);
    localStorage.setItem("dot_number", dot_number);
    window.location.reload();

    return { username, email, token };
  }
);