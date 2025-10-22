import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { validateGenresResponse, validateMovieResponse, validateMoviesResponse, } from './validateResponse';
export const movieApiSlice = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://cinemaguide.skillbox.cc/' }),
    endpoints: (builder) => ({
        getRandomMovie: builder.query({
            query: () => '/movie/random',
            transformResponse: (response) => validateMovieResponse(response),
        }),
        getTopMovies: builder.query({
            query: () => '/movie/top10',
            transformResponse: (response) => validateMoviesResponse(response),
        }),
        getMovieByID: builder.query({
            query: (id) => `/movie/${id}`,
            transformResponse: (response) => validateMovieResponse(response),
        }),
        getMovieGenres: builder.query({
            query: () => '/movie/genres',
            transformResponse: (response) => validateGenresResponse(response),
        }),
        getMoviesByTitle: builder.query({
            query: (searchString) => `/movie?title=${searchString}`,
            transformResponse: (response) => validateMoviesResponse(response),
        }),
        getMoviesByGenre: builder.query({
            query: ({ genre, page }) => `/movie?genre=${genre}&count=10&page=${page}`,
            transformResponse: (response) => validateMoviesResponse(response),
        }),
    }),
});
export const { useGetRandomMovieQuery, useGetTopMoviesQuery, useGetMovieByIDQuery, useGetMovieGenresQuery, useGetMoviesByTitleQuery, useGetMoviesByGenreQuery, } = movieApiSlice;
