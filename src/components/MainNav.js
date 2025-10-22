import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import IconGenres from '../assets/svg/genres-icon.svg?react';
export const MainNav = () => {
    return (_jsxs("nav", { className: "main-nav", children: [_jsx(NavLink, { to: '../', className: "main-nav__link", children: _jsx("span", { className: "main-nav__text", children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" }) }), _jsxs(NavLink, { to: '../movie/genres', className: "main-nav__link", children: [_jsx("span", { className: "main-nav__text", children: "\u0416\u0430\u043D\u0440\u044B" }), _jsx(IconGenres, { className: "main-nav__icon", width: 24, height: 24 })] })] }));
};
