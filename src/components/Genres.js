import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GenreCard } from './GenreCard';
import { getGenreData } from '../utils/getGenreData';
import { Link } from 'react-router-dom';
export const Genres = ({ genres }) => {
    return (_jsx("section", { className: "genres", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "genres__title", children: "\u0416\u0430\u043D\u0440\u044B \u0444\u0438\u043B\u044C\u043C\u043E\u0432" }), _jsx("ul", { className: "genres__list", children: genres.map((genre, index) => {
                        const genreData = getGenreData(genre);
                        return (_jsx("li", { className: "genres__item", children: _jsx(Link, { className: "genres__link", to: `/movie/?genre=${genre}`, children: _jsx(GenreCard, { title: genreData.nameRU, img: genreData.image }) }) }, index));
                    }) })] }) }));
};
