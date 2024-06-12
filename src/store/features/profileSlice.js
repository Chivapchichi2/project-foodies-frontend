import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: null,
  isAuthorizedUser: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getUserProfile(state, { payload }) {
      state.userProfile = payload;
      state.isAuthorizedUser = "followingCount" in payload ? true : false;
    },
  },
});

export default profileSlice.reducer;

export const { getUserProfile } = profileSlice.actions;
