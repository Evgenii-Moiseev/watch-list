import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useGetMovieGenresQuery } from '../app/movieApiSlice';
import { DataError } from '../components/DataError';
import { Genres } from '../components/Genres';
import { Loader } from '../components/Loader';
const GenresPage = () => {
    const { data: genres, isLoading, error } = useGetMovieGenresQuery();
    if (isLoading) {
        return _jsx(Loader, {});
    }
    if (error) {
        return _jsx(DataError, {});
    }
    return _jsx(_Fragment, { children: genres && _jsx(Genres, { genres: genres }) });
};
export default GenresPage;
