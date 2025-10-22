import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { MemoTopMovies } from '../components/TopMovies';
import { useGetRandomMovieQuery } from '../app/movieApiSlice';
import { useGetTopMoviesQuery } from '../app/movieApiSlice';
import { Loader } from '../components/Loader';
import { DataError } from '../components/DataError';
import { useCallback } from 'react';
import { MovieCard } from '../components/MovieCard';
const MainPage = () => {
    const { data: movie, error: randomQueryError, isLoading: isRandomQueryLoading, refetch, } = useGetRandomMovieQuery();
    const { data: movies, error: topQueryError, isLoading: isTopQueryLoading, } = useGetTopMoviesQuery();
    const handleUpdate = useCallback(() => {
        refetch();
    }, [refetch]);
    if (isRandomQueryLoading || isTopQueryLoading) {
        return _jsx(Loader, {});
    }
    if (randomQueryError || topQueryError) {
        return _jsx(DataError, {});
    }
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: "visually-hidden", children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B \u0412K \u041C\u0430\u0440\u0443\u0441\u044F" }), movie && movies && (_jsxs(_Fragment, { children: [_jsx(MovieCard, { page: "main", movie: movie, onUpdate: handleUpdate }), _jsx(MemoTopMovies, { movies: movies })] }))] }));
};
export default MainPage;
