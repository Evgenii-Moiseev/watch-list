import { FormField } from '../ui/FormField'
import { Button } from '../ui/Button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useLoginMutation } from '../app/authApiSlice'
import { Loader } from './Loader'
import { useEffect, type FC } from 'react'
import {
  LoginFormDataSchema,
  type IloginFormProps,
  type LoginFormData,
} from '../app/types'
import PasswordIcon from '../assets/svg/password-icon.svg?react'
import EmailIcon from '../assets/svg/email-icon.svg?react'

export const LoginForm: FC<IloginFormProps> = ({ onLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormDataSchema),
  })

  const [login, { isLoading, isError, isSuccess }] = useLoginMutation()

  useEffect(() => {
    if (isSuccess) {
      onLogin()
    }
  }, [isSuccess, onLogin])

  return (
    <>
      <form
        className="user-form"
        id="login-form"
        action="POST"
        onSubmit={handleSubmit(({ email, password }) => {
          login({ email, password })
        })}
      >
        <div className="user-form__fields">
          <FormField errorMessage={errors.email?.message}>
            <input
              className={`form-field__input ${errors.email ? 'form-field__input--error' : ''}`}
              type="text"
              placeholder="Электронная почта"
              id="email"
              {...register('email')}
            />
            <EmailIcon className="form-field__icon" width={24} height={24} />
          </FormField>
          <FormField errorMessage={errors.password?.message}>
            <input
              className={`form-field__input ${errors.password ? 'form-field__input--error' : ''}`}
              type="password"
              placeholder="Пароль"
              id="password"
              {...register('password')}
            />
            <PasswordIcon className="form-field__icon" width={24} height={24} />
          </FormField>
        </div>
        {isError && (
          <span className="user-form__error">
            Ошибка входа. Проверьте введенные данные и повторите попытку
          </span>
        )}
        <Button
          className="user-form__btn btn btn--primary"
          type="submit"
          isLoading={isLoading}
        >
          {isLoading ? <Loader modifier="loader--btn" /> : 'Войти'}
        </Button>
      </form>
    </>
  )
}
