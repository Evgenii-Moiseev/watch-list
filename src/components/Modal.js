import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import CloseIcon from '../assets/svg/close-icon.svg?react';
import { Button } from '../ui/Button';
export const Modal = ({ isOpen, onClose, children, modifier, }) => {
    const [isVisible, setIsVisible] = useState(false);
    const handleClose = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };
    if (isOpen) {
        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }
    return (_jsx("div", { className: `modal ${isVisible ? 'modal--visible' : ''}`, children: _jsxs("div", { className: `modal__content ${isVisible ? 'modal__content--visible' : ''} ${modifier ? `modal__content--${modifier}` : ''} `, children: [_jsx(Button, { className: "modal__close-btn btn", type: "button", onClick: handleClose, children: _jsx(CloseIcon, { width: 48, height: 48 }) }), children] }) }));
};
