import { createSlice } from "@reduxjs/toolkit";

const rvConsignmentslice = createSlice({
  name: "rvConsignmentslice",
  initialState: {
    consignments: [],
    users: [],
  },

  reducers: {
    addRvDetails(state, action) {
      state.consignments.push(action.payload);
    },

    registerUser(state, action) {
      state.users.push(action.payload);
    },
  },
});

export const { addRvDetails, registerUser } = rvConsignmentslice.actions;
export default rvConsignmentslice.reducer;
