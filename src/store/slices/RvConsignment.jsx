import {
  createAsyncThunk,
  createSlice,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import * as fieldsApi from "../../serviceApi/fieldsApi";

export const submitForm = createAsyncThunk(
  "/rvConsignment/submitData",
  async (FormData, { rejectedWithValue }) => {
    try {
      const response = await fieldsApi.submitForm(FormData);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const rvConsignmentslice = createSlice({
  name: "rvConsignmentslice",
  initialState: {
    consignments: [],
    users: [],
    leads: [],
    status: "idle",
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitForm.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Save submitted lead in frontend state
        state.leads.push(action.payload);
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { addRvDetails } = rvConsignmentslice.actions;
export default rvConsignmentslice.reducer;
