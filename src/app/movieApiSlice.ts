import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  validateGenresResponse,
  validateMovieResponse,
  validateMoviesResponse,
} from './validateResponse'
import type { Genres, Movie, Movies } from './types'

export const movieApiSlice = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://cinemaguide.skillbox.cc/' }),
  endpoints: (builder) => ({
    getRandomMovie: builder.query<Movie, void>({
      query: () => '/movie/random',
      transformResponse: (response: unknown) => validateMovieResponse(response),
    }),
    getTopMovies: builder.query<Movies, void>({
      query: () => '/movie/top10',
      transformResponse: (response: unknown) =>
        validateMoviesResponse(response),
    }),
    getMovieByID: builder.query<Movie, number>({
      query: (id) => `/movie/${id}`,
      transformResponse: (response: unknown) => validateMovieResponse(response),
    }),
    getMovieGenres: builder.query<Genres, void>({
      query: () => '/movie/genres',
      transformResponse: (response: unknown) =>
        validateGenresResponse(response),
    }),
    getMoviesByTitle: builder.query<Movies, string>({
      query: (searchString) => `/movie?title=${searchString}`,
      transformResponse: (response: unknown) =>
        validateMoviesResponse(response),
    }),
    getMoviesByGenre: builder.query<Movies, { genre: string; page: number }>({
      query: ({ genre, page }) => `/movie?genre=${genre}&count=10&page=${page}`,
      transformResponse: (response: unknown) =>
        validateMoviesResponse(response),
    }),
  }),
})

export const {
  useGetRandomMovieQuery,
  useGetTopMoviesQuery,
  useGetMovieByIDQuery,
  useGetMovieGenresQuery,
  useGetMoviesByTitleQuery,
  useGetMoviesByGenreQuery,
} = movieApiSlice
