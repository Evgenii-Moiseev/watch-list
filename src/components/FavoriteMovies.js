import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { MoviePosterCard } from '../components/MoviePosterCard';
import { Button } from '../ui/Button';
import CloseIcon from '../assets/svg/close-icon.svg?react';
export const FavoriteMovies = ({ movies, handleDelete, isDeleteLoading, }) => {
    return (_jsx(_Fragment, { children: movies.length > 0 ? (_jsx("ul", { className: "account__list", children: movies.map((movie) => {
                return (_jsxs("li", { className: "account__item", children: [_jsx(Link, { className: "account__link", to: `/movie/${movie.id}`, children: _jsx(MoviePosterCard, { movie: movie }) }), _jsx(Button, { className: "account__delete-btn btn", type: "button", onClick: () => handleDelete(movie.id), isLoading: isDeleteLoading, children: _jsx(CloseIcon, { width: 40, height: 40 }) })] }, movie.id));
            }) })) : (_jsx("span", { className: "account__favorites-empty", children: "\u0412\u044B \u043F\u043E\u043A\u0430 \u043D\u0435 \u0434\u043E\u0431\u0430\u0432\u0438\u043B\u0438 \u0444\u0438\u043B\u044C\u043C\u044B \u0432 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435" })) }));
};
