import React from "react";
import * as authApi from "../../serviceApi/authApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signupUser = createAsyncThunk(
  "/auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await authApi.signupUser(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const loginUser = createAsyncThunk(
  "/auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await authApi.loginUser({ email, password });

      localStorage.setItem("token", response.data.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.data.user));

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed!");
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "/auth/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await authApi.forgotPassword({ email });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// export const resetPassword = createAsyncThunk(
//   "/auth/resetPassword",
//   async ({ token, password }, { rejectWithValue }) => {
//     try {
//       const response = await authApi.resetPassword({ password });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Something went wrong");
//     }
//   }
// );

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder

      //Login Case
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.data.user;
        state.token = action.payload.data.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Signup Case
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      //Forgot Password Case
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      });
    //   .addCase(resetPassword.fulfilled, (state) => {
    //     state.loading = false;
    //   });
  },
});

export const { logoutUser } = AuthSlice.actions;
export default AuthSlice.reducer;
