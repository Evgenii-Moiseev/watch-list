import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import ClearSearchIcon from '../assets/svg/search-close-icon.svg?react';
import SearchIcon from '../assets/svg/search-icon.svg?react';
import { Button } from '../ui/Button';
import { Overlay } from './Overlay';
export const SearchField = ({ value, onChange, onClear, isMobile, isSearchOpen, setIsSearchOpen, }) => {
    const inputRef = useRef(null);
    useEffect(() => {
        if (isSearchOpen && isMobile && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isSearchOpen, isMobile]);
    const toggleSearch = () => {
        setIsSearchOpen((prev) => !prev);
    };
    return (_jsx(_Fragment, { children: isMobile ? (_jsxs(_Fragment, { children: [!isSearchOpen && (_jsx(Button, { className: "btn search-field__mobile-btn", type: "button", onClick: toggleSearch, children: _jsx(SearchIcon, { className: "search-field__mobile-icon", width: 24, height: 24 }) })), isSearchOpen && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "search-field", children: [_jsx("input", { ref: inputRef, className: "search-field__input", type: "search", placeholder: "\u041F\u043E\u0438\u0441\u043A", id: "search", value: value, onChange: onChange }), _jsx(SearchIcon, { className: `search-field__icon ${value && isMobile ? 'search-field__icon--active' : ''}`, width: 24, height: 24 }), _jsx(Button, { className: `search-field__btn ${value || isMobile ? '' : 'visually-hidden'}`, type: "button", onClick: () => {
                                        onClear();
                                        setIsSearchOpen(false);
                                    }, children: _jsx(ClearSearchIcon, { className: "search-field__close-icon", width: 24, height: 24 }) })] }), _jsx(Overlay, {})] }))] })) : (_jsxs("div", { className: "search-field", children: [_jsx("input", { ref: inputRef, className: "search-field__input", type: "search", placeholder: "\u041F\u043E\u0438\u0441\u043A", id: "search", value: value, onChange: onChange }), _jsx(SearchIcon, { className: "search-field__icon", width: 24, height: 24 }), _jsx(Button, { className: `search-field__btn ${value ? '' : 'visually-hidden'}`, type: "button", onClick: onClear, children: _jsx(ClearSearchIcon, { className: "search-field__close-icon", width: 24, height: 24 }) })] })) }));
};
