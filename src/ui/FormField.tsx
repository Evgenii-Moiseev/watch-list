import type { FC, ReactNode } from 'react'

interface IFormFieldProps {
  children: ReactNode
  errorMessage?: string
}

export const FormField: FC<IFormFieldProps> = ({ children, errorMessage }) => {
  return (
    <div className="form-field">
      {children}
      {errorMessage && (
        <span className="form-field__error-text">{errorMessage}</span>
      )}
    </div>
  )
}
