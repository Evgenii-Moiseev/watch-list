import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { MainNav } from './MainNav';
import { SearchMovie } from './SearchMovie';
import { useGetProfileQuery } from '../app/authApiSlice';
import { Button } from '../ui/Button';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsAuthModalOpen } from '../app/authModalSlice';
import { Link } from 'react-router-dom';
import LogoIcon from '../assets/svg/logo-icon.svg?react';
import UserIcon from '../assets/svg/user-icon.svg?react';
export const Header = () => {
    const { data: user } = useGetProfileQuery();
    const dispatch = useDispatch();
    const openModal = () => {
        dispatch(setIsAuthModalOpen(true));
    };
    return (_jsx(_Fragment, { children: _jsx("header", { className: "header", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "header__content", children: [_jsx(Link, { to: '../', className: "header__link", children: _jsx(LogoIcon, { className: "header__logo", width: 143, height: 32 }) }), _jsxs("div", { className: "header__wrap", children: [_jsx(MainNav, {}), _jsx(SearchMovie, {})] }), user ? (_jsxs(NavLink, { to: '../account', className: "main-nav__link", children: [_jsx("span", { className: "main-nav__text", children: user.surname }), _jsx(UserIcon, { className: "main-nav__icon ", width: 24, height: 24 })] })) : (_jsxs(Button, { className: "btn btn--XL-font header__account-btn", type: "button", onClick: openModal, children: [_jsx("span", { className: "btn__text", children: "\u0412\u043E\u0439\u0442\u0438" }), _jsx(UserIcon, { className: "main-nav__icon ", width: 24, height: 24 })] }))] }) }) }) }));
};
