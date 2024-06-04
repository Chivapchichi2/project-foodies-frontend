import { createSlice } from "@reduxjs/toolkit";

const initialState = { token: "" };

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setToken: (state, { payload }) => {
      state.name = payload;
    },
  },
});

export const loginReducer = loginSlice.reducer;
export const { setToken } = loginSlice.actions;
