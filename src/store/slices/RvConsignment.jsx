import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signupUser = createAsyncThunk(
  "/auth/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://rvb.workbrink.com/api/auth/register-public",
        userData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const rvConsignmentslice = createSlice({
  name: "rvConsignmentslice",
  initialState: {
    consignments: [],
    users: [],
    loading: false,
    error: null,
  },

  reducers: {
    addRvDetails(state, action) {
      state.consignments.push(action.payload);
    },

    // registerUser(state, action) {
    //   state.users.push(action.payload);
    // },

    logoutUser(state) {
      state.users = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addRvDetails, registerUser, logoutUser } =
  rvConsignmentslice.actions;
export default rvConsignmentslice.reducer;
