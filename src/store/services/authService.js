import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../../utilities/const.js";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders(headers, { getState }) {
            const token = (getState()).auth.token;
            headers.set('Authorization', `Bearer ${token}`);
        },
    }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (option) => ({
                url: 'api/users/signup',
                method: 'POST',
                body: option
            }),
            invalidatesTags: ['Auth']
        }),
        login: builder.mutation({
            query: (option) => ({
                url: 'api/users/signin',
                method: 'POST',
                body: option
            }),
            invalidatesTags: ['Auth']
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'api/users/signout',
                method: 'POST',
            }),
            invalidatesTags: ['Auth']
        }),
    })
})

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation
} = authApi;