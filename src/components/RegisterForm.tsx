import { Button } from '../ui/Button'
import { FormField } from '../ui/FormField'
import EmailIcon from '../assets/svg/email-icon.svg?react'
import PasswordIcon from '../assets/svg/password-icon.svg?react'
import UserIcon from '../assets/svg/user-icon.svg?react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRegisterUserMutation } from '../app/authApiSlice'
import { useEffect, type FC } from 'react'
import { getErrorMessage } from '../utils/getErrorMessage'
import { Loader } from './Loader'
import {
  RegisterFormDataSchema,
  type IRegisterFormProps,
  type RegisterFormData,
} from '../app/types'

export const RegisterForm: FC<IRegisterFormProps> = ({ onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterFormDataSchema),
  })
  const [registerUser, { isLoading, error, isError, isSuccess }] =
    useRegisterUserMutation()

  let errorMessage = ''
  if (isError) {
    errorMessage = getErrorMessage(error)
  }

  useEffect(() => {
    if (isSuccess) {
      onSuccess()
    }
  }, [isSuccess, onSuccess])

  return (
    <>
      <form
        className="user-form"
        id="register-form"
        action="POST"
        onSubmit={handleSubmit(({ email, password, name, surname }) => {
          registerUser({ email, password, name, surname })
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
          <FormField errorMessage={errors.name?.message}>
            <input
              className={`form-field__input ${errors.name ? 'form-field__input--error' : ''}`}
              type="text"
              placeholder="Имя"
              id="name"
              {...register('name')}
            />
            <UserIcon className="form-field__icon" width={24} height={24} />
          </FormField>
          <FormField errorMessage={errors.surname?.message}>
            <input
              className={`form-field__input ${errors.surname ? 'form-field__input--error' : ''}`}
              type="text"
              placeholder="Фамилия"
              id="surname"
              {...register('surname')}
            />
            <UserIcon className="form-field__icon" width={24} height={24} />
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
          <FormField errorMessage={errors.confirm?.message}>
            <input
              className={`form-field__input ${errors.confirm ? 'form-field__input--error' : ''}`}
              type="password"
              placeholder="Подтвердите пароль"
              id="confirm"
              {...register('confirm')}
            />
            <PasswordIcon className="form-field__icon" width={24} height={24} />
          </FormField>
        </div>
        {isError && (
          <span className="user-form__error">
            Произошла ошибка: {errorMessage}
          </span>
        )}
        <Button
          className="user-form__btn btn btn--primary"
          type="submit"
          isLoading={isLoading}
        >
          {isLoading ? <Loader modifier="loader--btn" /> : 'Создать аккаунт'}
        </Button>
      </form>
    </>
  )
}
