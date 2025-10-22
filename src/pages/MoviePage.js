import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useGetMovieByIDQuery } from '../app/movieApiSlice';
import { MovieCard } from '../components/MovieCard';
import { AboutMovie } from '../components/AboutMovie';
import { Loader } from '../components/Loader';
import { DataError } from '../components/DataError';
const MoviePage = () => {
    const { movieID } = useParams();
    const { data: movie, isLoading, error, } = useGetMovieByIDQuery(Number(movieID));
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (error) {
        return _jsx(DataError, {});
    }
    return (_jsx(_Fragment, { children: movie && (_jsxs(_Fragment, { children: [_jsx(MovieCard, { movie: movie, page: "movie" }), _jsx(AboutMovie, { movie: movie })] })) }));
};
export default MoviePage;
