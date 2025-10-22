import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AboutButton } from './AboutButton';
import { FavoritesButton } from './FavoritesButton';
import { TrailerButton } from './TrailerButton';
import { UpdateButton } from './UpdateButton';
export const MovieBtns = ({ movieID, page, onUpdate, onModalOpen, onFavoritesClick, isFavorite, isFavoritesLoading, }) => {
    return (_jsx("div", { className: `movie-intro__btns ${page !== 'main' ? 'movie-intro__btns--movie-page' : ''}`, children: page === 'main' ? (_jsxs(_Fragment, { children: [_jsx(TrailerButton, { onClick: onModalOpen }), movieID && _jsx(AboutButton, { id: movieID }), _jsx(FavoritesButton, { onClick: onFavoritesClick, isFavorite: isFavorite, isLoading: isFavoritesLoading }), _jsx(UpdateButton, { onClick: onUpdate })] })) : (_jsxs(_Fragment, { children: [_jsx(TrailerButton, { onClick: onModalOpen }), _jsx(FavoritesButton, { onClick: onFavoritesClick, isFavorite: isFavorite, isLoading: isFavoritesLoading })] })) }));
};
