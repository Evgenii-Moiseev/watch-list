import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {
  IDeleteFavoritesResponse,
  IProfileResponse,
  Movies,
} from './types'

export const favoritesApiSlice = createApi({
  reducerPath: 'favorites',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cinemaguide.skillbox.cc/' }),
  tagTypes: ['favorites'],
  endpoints: (builder) => ({
    getFavorites: builder.query<Movies, void>({
      query: () => ({
        url: '/favorites',
        method: 'GET',
        credentials: 'include',
      }),
      providesTags: ['favorites'],
    }),
    addToFavorites: builder.mutation<IProfileResponse, string>({
      query: (movieId) => ({
        url: '/favorites',
        method: 'POST',
        credentials: 'include',
        body: { id: movieId },
      }),
      invalidatesTags: ['favorites'],
    }),
    deleteFromFavorites: builder.mutation<IDeleteFavoritesResponse, number>({
      query: (movieId) => ({
        url: `/favorites/${movieId}`,
        method: 'DELETE',
        credentials: 'include',
      }),
      invalidatesTags: ['favorites'],
    }),
  }),
})

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
} = favoritesApiSlice
