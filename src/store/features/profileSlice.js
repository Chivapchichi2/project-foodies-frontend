import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: null,
  isAuthorizedUser: false,
  followers: [],
  following: [],
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getUserProfile(state, { payload }) {
      state.userProfile = payload;
      state.isAuthorizedUser = "followingCount" in payload ? true : false;
    },
    setUserFollowers(state, { payload }) {
      state.followers = [...state.followers, ...payload];
    },
    setUserFollowing(state, { payload }) {
      state.following = [...state.following, ...payload];
    },
  },
});

export default profileSlice.reducer;

export const { getUserProfile, setUserFollowers, setUserFollowing } = profileSlice.actions;
