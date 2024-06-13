import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utilities/const.js";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers, { getState }) {
      const token = getState().auth.token;
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  tagTypes: ["Recipe"],
  endpoints: (builder) => ({
    getRecipyById: builder.query({
      query: (id) => `api/recipes/${id}`,
      providesTags: ["Recipe"],
    }),
    getPopularRecipe: builder.query({
      query: () => "api/recipes/favorites",
      providesTags: ["Recipe"],
    }),
    getFavoriteRecipes: builder.query({
      query: () => "api/recipes/myrecipes/favorites",
      providesTags: ["Recipe"],
    }),
    addFavoriteRecipe: builder.mutation({
      query: (recipeId) => ({
        url: "api/recipes/favorites",
        method: "POST",
        body: { recipe: recipeId },
      }),
      invalidatesTags: ["Recipe"],
    }),
    removeFavoriteRecipe: builder.mutation({
      query: (recipeId) => ({
        url: "api/recipes/favorites",
        method: "DELETE",
        body: { recipe: recipeId },
      }),
      invalidatesTags: ["Recipe"],
    }),
  }),
});

export const {
  useGetRecipyByIdQuery,
  useGetPopularRecipeQuery,
  useGetFavoriteRecipesQuery,
  useAddFavoriteRecipeMutation,
  useRemoveFavoriteRecipeMutation,
} = recipeApi;