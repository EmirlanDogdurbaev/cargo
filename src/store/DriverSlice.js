import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../api";

export const signupDriver = createAsyncThunk(
    "auth/signupDriver",
    async ({
      username,
      password,
      email,
      driver_license,
      straxovka,
      car_number,
      car_color,
      car_title,
      car_year,
      car_type,
      bank,
    }) => {
    console.log({
        username,
        password,
        email,
        driver_license,
        straxovka,
        car_number,
        car_color,
        car_title,
        car_year,
        car_type,
        bank,
      });
      try {
        const response = await axios.post(api + "api/driver/register/", {
          user: {   
            username,
            password,
            email,
          },
          driver_license,
          straxovka,
          car_number,
          car_color,
          car_title,
          car_year,
          car_type,
          bank,
        });
  
        const token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("driver_license", driver_license);
        localStorage.setItem("straxovka", straxovka);
        localStorage.setItem("car_number", car_number);
        localStorage.setItem("car_color", car_color);
        localStorage.setItem("car_title", car_title);
        localStorage.setItem("car_year", car_year);
        localStorage.setItem("car_type", car_type);
        localStorage.setItem("bank", bank);
        window.location.reload();
  
        return { username, email, token };
      } catch (error) {
        throw new Error(error.response.data);
      }
    }
  );
  