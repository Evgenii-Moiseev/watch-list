import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import LogoBlack from '../assets/svg/logo-black.svg?react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { useDispatch } from 'react-redux';
import { setIsAuthModalOpen } from '../app/authModalSlice';
export const AuthForm = () => {
    const [authType, setAuthType] = useState('login');
    const handleClick = () => {
        setAuthType((prevState) => (prevState === 'login' ? 'register' : 'login'));
    };
    const handleRegisterSuccess = () => {
        setAuthType('success');
    };
    const dispatch = useDispatch();
    const handleLoginSuccess = () => {
        dispatch(setIsAuthModalOpen(false));
    };
    return (_jsxs("div", { className: "auth-form", children: [_jsx(LogoBlack, { className: "auth-form__logo", width: 132, height: 30 }), authType === 'register' && (_jsx("span", { className: "auth-form__title", children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" })), authType === 'success' && (_jsxs(_Fragment, { children: [_jsx("span", { className: "auth-form__title", children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u0430" }), _jsx("span", { className: "auth-form__text", children: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0432\u0430\u0448\u0443 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443 \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430" })] })), authType === 'login' && _jsx(LoginForm, { onLogin: handleLoginSuccess }), authType === 'register' && (_jsx(RegisterForm, { onSuccess: handleRegisterSuccess })), _jsxs("button", { className: `auth-form__button btn ${authType === 'success' ? 'btn--primary' : ' btn--black-font '}`, type: "button", onClick: handleClick, children: [authType === 'login' && 'Регистрация', authType === 'register' && 'У меня есть пароль', authType === 'success' && 'Войти'] })] }));
};
