import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const GenreCard = ({ title, img }) => {
    return (_jsxs("div", { className: "genre-card", children: [_jsx("img", { className: "genre-card__img", src: img, alt: `Кадр из фильма в жанре: "${title}"` }), _jsx("div", { className: "genre-card__bottom", children: _jsx("h2", { className: "genre-card__title", children: title }) })] }));
};
