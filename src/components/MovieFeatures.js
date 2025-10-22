import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Rating } from './Rating';
import { getRuntime } from '../utils/getRuntime';
export const MovieFeatures = ({ movie, modifier }) => {
    return (_jsxs("div", { className: `movie-features ${modifier ? `movie-features${modifier}` : ''}`, children: [movie.tmdbRating !== null && movie.tmdbRating >= 0 && (_jsx(Rating, { rating: movie.tmdbRating, modifier: modifier })), movie.releaseYear && (_jsx("span", { className: "movie-features__text", children: movie.releaseYear })), movie.genres &&
                movie.genres.map((genre, index) => {
                    return (_jsx("span", { className: "movie-features__text", children: genre }, index));
                }), movie.runtime && (_jsx("span", { className: "movie-features__text", children: getRuntime(movie.runtime) }))] }));
};
