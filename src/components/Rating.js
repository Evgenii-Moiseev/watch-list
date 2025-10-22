import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Star from '../assets/svg/star-icon.svg?react';
import { GOLD, GRAY, GREEN, RED } from '../app/variables';
export const Rating = ({ rating, modifier }) => {
    let ratingColor = 'transparent';
    switch (true) {
        case rating >= 8.5:
            ratingColor = GOLD;
            break;
        case rating >= 7 && rating < 8.5:
            ratingColor = GREEN;
            break;
        case rating >= 5 && rating < 7:
            ratingColor = GRAY;
            break;
        case rating >= 0 && rating < 5:
            ratingColor = RED;
            break;
    }
    return (_jsxs("div", { className: `rating ${modifier ? `rating${modifier}` : ''}`, style: { backgroundColor: ratingColor }, children: [_jsx(Star, { className: "rating__icon", width: 16, height: 16 }), _jsx("span", { className: "rating__text", children: rating.toFixed(1) })] }));
};
