import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utilities/const.js";

export const recipeApi = createApi({
  reducerPath: "recipeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
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
    addFavoriteRecipe: builder.mutation({
      query: (id) => ({
        url: `api/recipes/favorites`,
        method: "POST",
        body: { recipe: id },
      }),
      providesTags: ["Recipe"],
    }),
  }),
});

export const { useGetRecipyByIdQuery, useGetPopularRecipeQuery, useAddFavoriteRecipeMutation } =
  recipeApi;
