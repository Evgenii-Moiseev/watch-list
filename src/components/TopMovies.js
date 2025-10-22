import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { MoviePosterCard } from './MoviePosterCard';
import { memo } from 'react';
const TopMovies = ({ movies }) => {
    return (_jsx("section", { className: "top-movies", children: _jsxs("div", { className: "container", children: [_jsx("h2", { className: "top-movies__title", children: "\u0422\u043E\u043F 10 \u0444\u0438\u043B\u044C\u043C\u043E\u0432" }), _jsx("ul", { className: "top-movies__list", children: movies &&
                        movies.map((movie, index) => {
                            return (_jsx("li", { className: "top-movies__item", children: _jsx(Link, { to: `/movie/${movie.id}`, className: "top-movies__link", children: _jsx(MoviePosterCard, { index: index + 1, movie: movie }) }) }, movie.id));
                        }) })] }) }));
};
export const MemoTopMovies = memo(TopMovies);
