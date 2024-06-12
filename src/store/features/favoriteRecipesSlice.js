import { createSlice } from "@reduxjs/toolkit";

const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    setFavoriteRecipes: (state, action) => {
      return action.payload;
    },
    addFavoriteRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeFavoriteRecipe: (state, action) => {
      return state.filter((recipe) => recipe._id !== action.payload);
    },
  },
});

export const { setFavoriteRecipes, addFavoriteRecipe, removeFavoriteRecipe } =
  favoriteRecipesSlice.actions;

export default favoriteRecipesSlice.reducer;
