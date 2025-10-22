import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const authApiSlice = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cinemaguide.skillbox.cc/' }),
    tagTypes: ['profile'],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (userData) => ({
                url: 'user',
                method: 'POST',
                body: userData,
            }),
        }),
        login: builder.mutation({
            query: (loginData) => ({
                url: 'auth/login',
                credentials: 'include',
                method: 'POST',
                body: loginData,
            }),
            invalidatesTags: ['profile'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'auth/logout',
                credentials: 'include',
                method: 'GET',
            }),
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                await queryFulfilled;
                dispatch(authApiSlice.util.resetApiState());
            },
        }),
        getProfile: builder.query({
            query: () => ({
                url: 'profile',
                credentials: 'include',
                method: 'GET',
            }),
            providesTags: ['profile'],
        }),
    }),
});
export const { useRegisterUserMutation, useLoginMutation, useGetProfileQuery, useLogoutMutation, } = authApiSlice;
