import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const favoritesApiSlice = createApi({
    reducerPath: 'favorites',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cinemaguide.skillbox.cc/' }),
    tagTypes: ['favorites'],
    endpoints: (builder) => ({
        getFavorites: builder.query({
            query: () => ({
                url: '/favorites',
                method: 'GET',
                credentials: 'include',
            }),
            providesTags: ['favorites'],
        }),
        addToFavorites: builder.mutation({
            query: (movieId) => ({
                url: '/favorites',
                method: 'POST',
                credentials: 'include',
                body: { id: movieId },
            }),
            invalidatesTags: ['favorites'],
        }),
        deleteFromFavorites: builder.mutation({
            query: (movieId) => ({
                url: `/favorites/${movieId}`,
                method: 'DELETE',
                credentials: 'include',
            }),
            invalidatesTags: ['favorites'],
        }),
    }),
});
export const { useGetFavoritesQuery, useAddToFavoritesMutation, useDeleteFromFavoritesMutation, } = favoritesApiSlice;
