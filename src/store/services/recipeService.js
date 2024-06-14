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
    getRecipes: builder.query({
      query: ({ category, ingredients, area } = {}) => {
        const params = new URLSearchParams();
        if (category) {
          params.append("category", category);
        }
        if (ingredients) {
          params.append("ingredients", ingredients);
        }
        if (area) {
          params.append("area", area);
        }
        return `api/recipes/?${params.toString()}`;
      },
      providesTags: ["Recipe"],
    }),
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
    removeRecipe: builder.mutation({
      query: (id) => ({
        url: `api/recipes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Recipe"],
    }),
    createRecipe: builder.mutation({
      query: (newRecipe) => ({
        upl: "api/recipes/",
        method: "POST",
        body: newRecipe,
        invalidatesTags: ["Recipe"],
      }),
    }),
  }),
});

export const {
  useGetRecipesQuery,
  useGetRecipyByIdQuery,
  useGetPopularRecipeQuery,
  useGetFavoriteRecipesQuery,
  useAddFavoriteRecipeMutation,
  useRemoveFavoriteRecipeMutation,
  useRemoveRecipeMutation,
  useCreateRecipeMutation,
} = recipeApi;
