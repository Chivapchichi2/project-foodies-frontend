import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utilities/const";

export const areaApi = createApi({
  reducerPath: "areaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Areas"],
  endpoints: (builder) => ({
    getAreas: builder.query({
      query: () => "api/areas",
      providesTags: ["Areas"],
    }),
  }),
});

export const { useGetAreasQuery } = areaApi;
