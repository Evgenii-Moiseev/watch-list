import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '../ui/Button';
import { FormField } from '../ui/FormField';
import EmailIcon from '../assets/svg/email-icon.svg?react';
import PasswordIcon from '../assets/svg/password-icon.svg?react';
import UserIcon from '../assets/svg/user-icon.svg?react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRegisterUserMutation } from '../app/authApiSlice';
import { useEffect } from 'react';
import { getErrorMessage } from '../utils/getErrorMessage';
import { Loader } from './Loader';
import { RegisterFormDataSchema, } from '../app/types';
export const RegisterForm = ({ onSuccess }) => {
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(RegisterFormDataSchema),
    });
    const [registerUser, { isLoading, error, isError, isSuccess }] = useRegisterUserMutation();
    let errorMessage = '';
    if (isError) {
        errorMessage = getErrorMessage(error);
    }
    useEffect(() => {
        if (isSuccess) {
            onSuccess();
        }
    }, [isSuccess, onSuccess]);
    return (_jsx(_Fragment, { children: _jsxs("form", { className: "user-form", id: "register-form", action: "POST", onSubmit: handleSubmit(({ email, password, name, surname }) => {
                registerUser({ email, password, name, surname });
            }), children: [_jsxs("div", { className: "user-form__fields", children: [_jsxs(FormField, { errorMessage: errors.email?.message, children: [_jsx("input", { className: `form-field__input ${errors.email ? 'form-field__input--error' : ''}`, type: "text", placeholder: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430", id: "email", ...register('email') }), _jsx(EmailIcon, { className: "form-field__icon", width: 24, height: 24 })] }), _jsxs(FormField, { errorMessage: errors.name?.message, children: [_jsx("input", { className: `form-field__input ${errors.name ? 'form-field__input--error' : ''}`, type: "text", placeholder: "\u0418\u043C\u044F", id: "name", ...register('name') }), _jsx(UserIcon, { className: "form-field__icon", width: 24, height: 24 })] }), _jsxs(FormField, { errorMessage: errors.surname?.message, children: [_jsx("input", { className: `form-field__input ${errors.surname ? 'form-field__input--error' : ''}`, type: "text", placeholder: "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", id: "surname", ...register('surname') }), _jsx(UserIcon, { className: "form-field__icon", width: 24, height: 24 })] }), _jsxs(FormField, { errorMessage: errors.password?.message, children: [_jsx("input", { className: `form-field__input ${errors.password ? 'form-field__input--error' : ''}`, type: "password", placeholder: "\u041F\u0430\u0440\u043E\u043B\u044C", id: "password", ...register('password') }), _jsx(PasswordIcon, { className: "form-field__icon", width: 24, height: 24 })] }), _jsxs(FormField, { errorMessage: errors.confirm?.message, children: [_jsx("input", { className: `form-field__input ${errors.confirm ? 'form-field__input--error' : ''}`, type: "password", placeholder: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C", id: "confirm", ...register('confirm') }), _jsx(PasswordIcon, { className: "form-field__icon", width: 24, height: 24 })] })] }), isError && (_jsxs("span", { className: "user-form__error", children: ["\u041F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430: ", errorMessage] })), _jsx(Button, { className: "user-form__btn btn btn--primary", type: "submit", isLoading: isLoading, children: isLoading ? _jsx(Loader, { modifier: "loader--btn" }) : 'Создать аккаунт' })] }) }));
};
