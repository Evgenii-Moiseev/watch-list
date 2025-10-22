import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PosterCardStub } from './PosterCardStub';
export const MoviePosterCard = ({ movie, index }) => {
    return (_jsx("div", { className: "poster-card", children: _jsxs("div", { className: "poster-card__wrap", children: [index && _jsx("span", { className: "poster-card__index", children: index }), movie.posterUrl ? (_jsx("img", { className: "poster-card__img", src: movie.posterUrl, alt: movie.title, width: 224, height: 336 })) : (_jsx(PosterCardStub, { title: movie.title }))] }) }));
};
