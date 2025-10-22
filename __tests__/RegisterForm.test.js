import { jsx as _jsx } from "react/jsx-runtime";
const registerUserMutationMock = jest.fn();
const onSuccessMock = jest.fn();
let registerUserMutationState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
};
jest.mock('../src/app/authApiSlice', () => ({
    useRegisterUserMutation: () => [
        (...args) => {
            registerUserMutationMock(...args);
            return Promise.resolve();
        },
        registerUserMutationState,
    ],
}));
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { RegisterForm } from '../src/components/RegisterForm';
describe('RegisterForm', () => {
    afterEach(() => {
        jest.clearAllMocks();
        registerUserMutationState = {
            isLoading: false,
            isError: false,
            isSuccess: false,
        };
    });
    const getFormElements = () => ({
        emailInput: screen.getByPlaceholderText('Электронная почта'),
        nameInput: screen.getByPlaceholderText('Имя'),
        surnameInput: screen.getByPlaceholderText('Фамилия'),
        passwordInput: screen.getByPlaceholderText('Пароль'),
        confirmInput: screen.getByPlaceholderText('Подтвердите пароль'),
        submitButton: screen.getByRole('button', { name: 'Создать аккаунт' }),
    });
    it('Отображение ошибки при вводе некорректного email', async () => {
        render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'invalid-email');
        await userEvent.type(nameInput, 'name');
        await userEvent.type(surnameInput, 'surname');
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.type(confirmInput, 'validPassword');
        await userEvent.click(submitButton);
        const emailError = await screen.findByText('Некорректный email');
        expect(emailError).toBeInTheDocument();
        expect(registerUserMutationMock).not.toHaveBeenCalled();
    });
    it('Отображение ошибки при вводе пустого поля name', async () => {
        render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.clear(nameInput);
        await userEvent.type(surnameInput, 'surname');
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.type(confirmInput, 'validPassword');
        await userEvent.click(submitButton);
        const nameField = nameInput.closest('.form-field');
        if (nameField) {
            const nameError = within(nameField).queryByText('Обязательное поле');
            expect(nameError).toBeInTheDocument();
        }
        expect(registerUserMutationMock).not.toHaveBeenCalled();
    });
    it('Отображение ошибки при вводе пустого поля surname', async () => {
        render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.type(nameInput, 'name');
        await userEvent.clear(surnameInput);
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.type(confirmInput, 'validPassword');
        await userEvent.click(submitButton);
        const surnameField = surnameInput.closest('.form-field');
        if (surnameField) {
            const surnameError = within(surnameField).queryByText('Обязательное поле');
            expect(surnameError).toBeInTheDocument();
        }
        expect(registerUserMutationMock).not.toHaveBeenCalled();
    });
    it('Отображение ошибки при вводе пустого поля password', async () => {
        render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.type(nameInput, 'name');
        await userEvent.type(surnameInput, 'surname');
        await userEvent.clear(passwordInput);
        await userEvent.type(confirmInput, 'validPassword');
        await userEvent.click(submitButton);
        const passwordField = passwordInput.closest('.form-field');
        if (passwordField) {
            const passwordError = within(passwordField).queryByText('Обязательное поле');
            expect(passwordError).toBeInTheDocument();
        }
        expect(registerUserMutationMock).not.toHaveBeenCalled();
    });
    it('Отображение ошибки при вводе пустого поля confirm', async () => {
        render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.type(nameInput, 'name');
        await userEvent.type(surnameInput, 'surname');
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.clear(confirmInput);
        await userEvent.click(submitButton);
        const confirmField = confirmInput.closest('.form-field');
        if (confirmField) {
            const confirmError = within(confirmField).queryByText('Обязательное поле');
            expect(confirmError).toBeInTheDocument();
        }
        expect(registerUserMutationMock).not.toHaveBeenCalled();
    });
    it('Отображение ошибки при вводе несовпадающих паролей', async () => {
        render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.type(nameInput, 'name');
        await userEvent.type(surnameInput, 'surname');
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.type(confirmInput, 'invalidPassword');
        await userEvent.click(submitButton);
        const confirmField = confirmInput.closest('.form-field');
        if (confirmField) {
            const confirmError = within(confirmField).queryByText('Пароли не совпадают');
            expect(confirmError).toBeInTheDocument();
        }
        expect(registerUserMutationMock).not.toHaveBeenCalled();
    });
    it('Вызывает registerUserMutation при валидных данных', async () => {
        render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.type(nameInput, 'name');
        await userEvent.type(surnameInput, 'surname');
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.type(confirmInput, 'validPassword');
        await userEvent.click(submitButton);
        expect(registerUserMutationMock).toHaveBeenCalledTimes(1);
        expect(registerUserMutationMock).toHaveBeenCalledWith({
            email: 'user@mail.ru',
            name: 'name',
            surname: 'surname',
            password: 'validPassword',
        });
    });
    it('Вызывает onSuccess при успешной регистрации', async () => {
        const { rerender } = render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.type(nameInput, 'name');
        await userEvent.type(surnameInput, 'surname');
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.type(confirmInput, 'validPassword');
        await userEvent.click(submitButton);
        expect(registerUserMutationMock).toHaveBeenCalledWith({
            email: 'user@mail.ru',
            name: 'name',
            surname: 'surname',
            password: 'validPassword',
        });
        expect(onSuccessMock).not.toHaveBeenCalled();
        registerUserMutationState = {
            ...registerUserMutationState,
            isSuccess: true,
        };
        rerender(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        expect(onSuccessMock).toHaveBeenCalledTimes(1);
    });
    it('Отображение лоадера при попытке login', async () => {
        const { rerender } = render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.type(nameInput, 'name');
        await userEvent.type(surnameInput, 'surname');
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.type(confirmInput, 'validPassword');
        await userEvent.click(submitButton);
        expect(registerUserMutationMock).toHaveBeenCalledWith({
            email: 'user@mail.ru',
            name: 'name',
            surname: 'surname',
            password: 'validPassword',
        });
        expect(onSuccessMock).not.toHaveBeenCalled();
        registerUserMutationState = {
            ...registerUserMutationState,
            isLoading: true,
        };
        rerender(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const loader = screen.getByTestId('loader');
        expect(loader).toBeInTheDocument();
    });
    it('Отображение ошибки при неуспешной попытке регистрации', async () => {
        const { rerender } = render(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        const { emailInput, nameInput, surnameInput, passwordInput, confirmInput, submitButton, } = getFormElements();
        await userEvent.type(emailInput, 'user@mail.ru');
        await userEvent.type(nameInput, 'name');
        await userEvent.type(surnameInput, 'surname');
        await userEvent.type(passwordInput, 'validPassword');
        await userEvent.type(confirmInput, 'validPassword');
        await userEvent.click(submitButton);
        expect(registerUserMutationMock).toHaveBeenCalledWith({
            email: 'user@mail.ru',
            name: 'name',
            surname: 'surname',
            password: 'validPassword',
        });
        expect(onSuccessMock).not.toHaveBeenCalled();
        registerUserMutationState = {
            ...registerUserMutationState,
            isError: true,
        };
        rerender(_jsx(RegisterForm, { onSuccess: onSuccessMock }));
        expect(onSuccessMock).not.toHaveBeenCalled();
        const errorElement = await screen.findByText((content) => content.includes('Произошла ошибка'));
        expect(errorElement).toBeInTheDocument();
    });
});
