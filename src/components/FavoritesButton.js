import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '../ui/Button';
import FavoritesIcon from '../assets/svg/favorites-icon.svg?react';
import FavoritesIconActive from '../assets/svg/favorites-icon-active.svg?react';
export const FavoritesButton = ({ onClick, isFavorite, isLoading, }) => {
    return (_jsx(Button, { className: "btn btn--icon", onClick: onClick, isLoading: isLoading, type: "button", "aria-label": isFavorite
            ? 'Удалить фильм из избранного'
            : 'Добавить фильм в избранное', children: isFavorite ? (_jsx(FavoritesIconActive, { className: "btn__icon", width: 24, height: 24 })) : (_jsx(FavoritesIcon, { className: "btn__icon", width: 24, height: 24 })) }));
};
