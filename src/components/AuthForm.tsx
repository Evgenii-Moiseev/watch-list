import { useState } from 'react'
import LogoBlack from '../assets/svg/logo-black.svg?react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { useDispatch } from 'react-redux'
import { setIsAuthModalOpen } from '../app/authModalSlice'

export const AuthForm = () => {
  const [authType, setAuthType] = useState('login')

  const handleClick = () => {
    setAuthType((prevState) => (prevState === 'login' ? 'register' : 'login'))
  }

  const handleRegisterSuccess = () => {
    setAuthType('success')
  }

  const dispatch = useDispatch()

  const handleLoginSuccess = () => {
    dispatch(setIsAuthModalOpen(false))
  }

  return (
    <div className="auth-form">
      <LogoBlack className="auth-form__logo" width={132} height={30} />
      {authType === 'register' && (
        <span className="auth-form__title">Регистрация</span>
      )}
      {authType === 'success' && (
        <>
          <span className="auth-form__title">Регистрация завершена</span>
          <span className="auth-form__text">
            Используйте вашу электронную почту для входа
          </span>
        </>
      )}
      {authType === 'login' && <LoginForm onLogin={handleLoginSuccess} />}
      {authType === 'register' && (
        <RegisterForm onSuccess={handleRegisterSuccess} />
      )}
      <button
        className={`auth-form__button btn ${authType === 'success' ? 'btn--primary' : ' btn--black-font '}`}
        type="button"
        onClick={handleClick}
      >
        {authType === 'login' && 'Регистрация'}
        {authType === 'register' && 'У меня есть пароль'}
        {authType === 'success' && 'Войти'}
      </button>
    </div>
  )
}
