import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utilities/const.js";

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders(headers, { getState }) {
      const token = getState().auth.token;
      headers.set("Authorization", `Bearer ${token}`);
    },
  }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    fetchUserProfile: builder.query({
      query: (userId) => `api/users/details/${userId}`,
      providesTags: ["Profile"],
    }),
    fetchUserFollowers: builder.query({
      query: ({ userId, page = 1, limit = 10 }) =>
        `api/users/followers/${userId}?page=${page}&limit=${limit}`,
      providesTags: ["Profile"],
    }),
    fetchUserFollowing: builder.query({
      query: ({ page = 1, limit = 10 }) => `api/users/following?page=${page}&limit=${limit}`,
      providesTags: ["Profile"],
    }),
    updateUserAvatar: builder.mutation({
      query: (formData) => ({
        url: "api/users/avatars",
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useFetchUserProfileQuery,
  useFetchUserFollowersQuery,
  useFetchUserFollowingQuery,
  useUpdateUserAvatarMutation,
} = profileApi;