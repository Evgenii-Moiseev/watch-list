import { jsx as _jsx } from "react/jsx-runtime";
import { MovieSearchCard } from './MovieSearchCard';
import { Link } from 'react-router-dom';
export const SearchResult = ({ movies, clearSearchTerm, isMobile, setIsSearchOpen, }) => {
    const handleLinkClick = () => {
        clearSearchTerm();
        if (isMobile) {
            setIsSearchOpen(false);
        }
    };
    return (_jsx("div", { className: "search__result", children: movies.length === 0 ? (_jsx("div", { className: "search__empty", children: "\u0424\u0438\u043B\u044C\u043C \u0441 \u0442\u0430\u043A\u0438\u043C \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\u043C \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D" })) : (_jsx("ul", { className: "search__list", children: movies.map((movie) => {
                return (_jsx("li", { className: "search__item", children: _jsx(Link, { to: `/movie/${movie.id}`, className: "search__link", onClick: handleLinkClick, children: _jsx(MovieSearchCard, { movie: movie }) }) }, movie.id));
            }) })) }));
};
