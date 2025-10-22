import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MovieFeatures } from './MovieFeatures';
export const MovieSearchCard = ({ movie }) => {
    return (_jsxs("div", { className: "search-card", children: [movie.posterUrl ? (_jsx("img", { className: "search-card__image", src: movie.posterUrl, alt: movie.title, width: 40, height: 52 })) : (_jsx("img", { className: "search-card__image", src: "/search-movie-stub.jpg", alt: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u043A\u0438\u043D\u043E\u043F\u043B\u0435\u043D\u043A\u0438", width: 40, height: 52 })), _jsxs("div", { className: "search-card__info", children: [_jsx(MovieFeatures, { movie: movie, modifier: "--small" }), _jsx("span", { className: "search-card__title", children: movie.title })] })] }));
};
