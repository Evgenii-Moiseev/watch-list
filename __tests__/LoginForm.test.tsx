const loginMutationMock = jest.fn()
const onLoginMock = jest.fn()

let loginMutationState: MutationState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
}

jest.mock('../src/app/authApiSlice', () => ({
  useLoginMutation: () => [
    (...args: [{ email: string; password: string }]) => {
      loginMutationMock(...args)
      return Promise.resolve()
    },
    loginMutationState,
  ],
}))

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LoginForm } from '../src/components/LoginForm'
import '@testing-library/jest-dom'
import { MutationState } from '../src/app/types'

describe('LoginForm', () => {
  afterEach(() => {
    jest.clearAllMocks()
    loginMutationState = {
      isLoading: false,
      isError: false,
      isSuccess: false,
    }
  })

  const getFormElements = () => ({
    emailInput: screen.getByPlaceholderText('Электронная почта'),
    passwordInput: screen.getByPlaceholderText('Пароль'),
    submitButton: screen.getByRole('button', { name: 'Войти' }),
  })

  it('Отображение ошибки при вводе некорректного email', async () => {
    render(<LoginForm onLogin={onLoginMock} />)
    const { emailInput, passwordInput, submitButton } = getFormElements()

    await userEvent.type(emailInput, 'invalid-email')
    await userEvent.type(passwordInput, 'validPassword')
    await userEvent.click(submitButton)

    const emailError = await screen.findByText('Некорректный email')

    expect(emailError).toBeInTheDocument()
    expect(loginMutationMock).not.toHaveBeenCalled()
  })

  it('Отображение ошибки при вводе пустого поля password', async () => {
    render(<LoginForm onLogin={onLoginMock} />)
    const { emailInput, passwordInput, submitButton } = getFormElements()

    await userEvent.type(emailInput, 'user@mail.ru')
    await userEvent.clear(passwordInput)
    await userEvent.click(submitButton)

    const passwordError = await screen.findByText('Обязательное поле')
    expect(passwordError).toBeInTheDocument()
    expect(loginMutationMock).not.toHaveBeenCalled()
  })

  it('Вызывает loginMutation при валидных данных', async () => {
    render(<LoginForm onLogin={onLoginMock} />)
    const { emailInput, passwordInput, submitButton } = getFormElements()

    await userEvent.type(emailInput, 'user@mail.ru')
    await userEvent.type(passwordInput, 'validPassword')
    await userEvent.click(submitButton)

    expect(loginMutationMock).toHaveBeenCalledTimes(1)
    expect(loginMutationMock).toHaveBeenCalledWith({
      email: 'user@mail.ru',
      password: 'validPassword',
    })
  })

  it('Вызывает onLogin при успешном login', async () => {
    const { rerender } = render(<LoginForm onLogin={onLoginMock} />)
    const { emailInput, passwordInput, submitButton } = getFormElements()

    await userEvent.type(emailInput, 'user@mail.ru')
    await userEvent.type(passwordInput, 'validPassword')
    await userEvent.click(submitButton)

    expect(loginMutationMock).toHaveBeenCalledWith({
      email: 'user@mail.ru',
      password: 'validPassword',
    })

    expect(onLoginMock).not.toHaveBeenCalled()

    loginMutationState = {
      ...loginMutationState,
      isSuccess: true,
    }

    rerender(<LoginForm onLogin={onLoginMock} />)
    expect(onLoginMock).toHaveBeenCalledTimes(1)
  })

  it('Отображение ошибки при неуспешном login', async () => {
    const { rerender } = render(<LoginForm onLogin={onLoginMock} />)
    const { emailInput, passwordInput, submitButton } = getFormElements()

    await userEvent.type(emailInput, 'user@mail.ru')
    await userEvent.type(passwordInput, 'validPassword')
    await userEvent.click(submitButton)

    expect(loginMutationMock).toHaveBeenCalledWith({
      email: 'user@mail.ru',
      password: 'validPassword',
    })

    expect(onLoginMock).not.toHaveBeenCalled()

    loginMutationState = {
      ...loginMutationState,
      isError: true,
    }

    rerender(<LoginForm onLogin={onLoginMock} />)
    expect(onLoginMock).not.toHaveBeenCalled()

    const loginError = await screen.findByText(
      'Ошибка входа. Проверьте введенные данные и повторите попытку'
    )
    expect(loginError).toBeInTheDocument()
  })

  it('Отображение лоадера при попытке login', async () => {
    const { rerender } = render(<LoginForm onLogin={onLoginMock} />)
    const { emailInput, passwordInput, submitButton } = getFormElements()

    await userEvent.type(emailInput, 'user@mail.ru')
    await userEvent.type(passwordInput, 'validPassword')
    await userEvent.click(submitButton)

    expect(loginMutationMock).toHaveBeenCalledWith({
      email: 'user@mail.ru',
      password: 'validPassword',
    })

    expect(onLoginMock).not.toHaveBeenCalled()

    loginMutationState = {
      ...loginMutationState,
      isLoading: true,
    }

    rerender(<LoginForm onLogin={onLoginMock} />)

    const loader = screen.getByTestId('loader')
    expect(loader).toBeInTheDocument()
  })
})
