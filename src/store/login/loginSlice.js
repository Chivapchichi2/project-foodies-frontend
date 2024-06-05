import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

export const persistedLoginReducer = persistReducer({ key: "login", storage }, loginSlice.reducer);
export const { setToken } = loginSlice.actions;
