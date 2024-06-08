import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const testimonialApi = createApi({
    reducerPath: "testimonialApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://foodies-ua-1497a9d7b69f.herokuapp.com/',
    }),
    tagTypes: ['Testimonial'],
    endpoints: (builder) => ({
        getTestimonials: builder.query({
            query: () => "api/testimonials",
            providesTags: ['Testimonial']
        })
    })
})

export const {useGetTestimonialsQuery} = testimonialApi;