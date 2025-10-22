import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import OKIcon from '../assets/svg/ok-icon.svg?react';
import VKIcon from '../assets/svg/vk-icon.svg?react';
import YTIcon from '../assets/svg/youtube-icon.svg?react';
import TGIcon from '../assets/svg/telegram-icon.svg?react';
export const Social = () => {
    return (_jsx("div", { className: "social", children: _jsxs("ul", { className: "social__list", children: [_jsx("li", { className: "social__item", children: _jsx(Link, { to: 'https://vk.com', className: "social__link", target: "_blank", children: _jsx(VKIcon, { className: "social__icon", width: 36, height: 36 }) }) }), _jsx("li", { className: "social__item", children: _jsx(Link, { to: 'https://youtube.com', className: "social__link", target: "_blank", children: _jsx(YTIcon, { className: "social__icon", width: 36, height: 36 }) }) }), _jsx("li", { className: "social__item", children: _jsx(Link, { to: 'https://ok.com', className: "social__link", target: "_blank", children: _jsx(OKIcon, { className: "social__icon", width: 36, height: 36 }) }) }), _jsx("li", { className: "social__item", children: _jsx(Link, { to: 'https://web.telegram.org/a/', className: "social__link", target: "_blank", children: _jsx(TGIcon, { className: "social__icon", width: 36, height: 36 }) }) })] }) }));
};
