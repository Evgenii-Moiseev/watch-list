import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { FormField } from '../ui/FormField';
import { Button } from '../ui/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useLoginMutation } from '../app/authApiSlice';
import { Loader } from './Loader';
import { useEffect } from 'react';
import { LoginFormDataSchema, } from '../app/types';
import PasswordIcon from '../assets/svg/password-icon.svg?react';
import EmailIcon from '../assets/svg/email-icon.svg?react';
export const LoginForm = ({ onLogin }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(LoginFormDataSchema),
    });
    const [login, { isLoading, isError, isSuccess }] = useLoginMutation();
    useEffect(() => {
        if (isSuccess) {
            onLogin();
        }
    }, [isSuccess, onLogin]);
    return (_jsx(_Fragment, { children: _jsxs("form", { className: "user-form", id: "login-form", action: "POST", onSubmit: handleSubmit(({ email, password }) => {
                login({ email, password });
            }), children: [_jsxs("div", { className: "user-form__fields", children: [_jsxs(FormField, { errorMessage: errors.email?.message, children: [_jsx("input", { className: `form-field__input ${errors.email ? 'form-field__input--error' : ''}`, type: "text", placeholder: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", id: "email", ...register('email') }), _jsx(EmailIcon, { className: "form-field__icon", width: 24, height: 24 })] }), _jsxs(FormField, { errorMessage: errors.password?.message, children: [_jsx("input", { className: `form-field__input ${errors.password ? 'form-field__input--error' : ''}`, type: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", id: "password", ...register('password') }), _jsx(PasswordIcon, { className: "form-field__icon", width: 24, height: 24 })] })] }), isError && (_jsx("span", { className: "user-form__error", children: "\u041E\u0448\u0438\u0431\u043A\u0430 \u0432\u0445\u043E\u0434\u0430. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u043E\u043F\u044B\u0442\u043A\u0443" })), _jsx(Button, { className: "user-form__btn btn btn--primary", type: "submit", isLoading: isLoading, children: isLoading ? _jsx(Loader, { modifier: "loader--btn" }) : 'Войти' })] }) }));
};
