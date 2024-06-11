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
  }),
});

export const { useFetchUserProfileQuery } = profileApi;
