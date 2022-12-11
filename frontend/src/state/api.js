import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: 'adminsApi',
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (id) => `general/user/${id}`,
            providesTags: ['User']
        }),
    }),
});

export const { useGetUserQuery } = apiSlice;
