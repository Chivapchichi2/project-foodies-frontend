import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userProfile: null,
  isAuthorizedUser: false,
  recipes: [],
  favoritesRecipes: [],
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
    setUserAddedRecipes(state, { payload }) {
      state.recipes = [...state.recipes, ...payload.data];
    },
    setUserFavoritesRecipes(state, { payload }) {
      state.favoritesRecipes = [...payload.data];
    },

    setUserFollowers(state, { payload }) {
      state.followers = [...payload.followers];
    },
    setUserFollowing(state, { payload }) {
      state.following = [...payload.following];
    },
  },
});

export default profileSlice.reducer;

export const {
  getUserProfile,
  setUserFollowers,
  setUserFollowing,
  setUserAddedRecipes,
  setUserFavoritesRecipes,
} = profileSlice.actions;
