import type { FC } from 'react'
import { getUserInitials } from '../utils/getUserInitials'
import EmailIcon from '../assets/svg/email-icon.svg?react'
import { Button } from '../ui/Button'
import { Loader } from '../components/Loader'
import type { IAccountSettingsProps } from '../app/types'

export const AccountSettings: FC<IAccountSettingsProps> = ({
  user,
  isLoading,
  onLogout,
}) => {
  return (
    <>
      <div className="account__data-wrap">
        <div className="account__feature">
          <span className="account__icon-wrap">
            {getUserInitials(user.name, user.surname)}
          </span>
          <div className="account__user-data">
            <span className="account__label">Имя Фамилия</span>
            <span className="account__text">{`${user.name} ${user.surname}`}</span>
          </div>
        </div>
        <div className="account__feature">
          <span className="account__icon-wrap">
            <EmailIcon className="account__icon" width={24} height={24} />
          </span>
          <div className="account__user-data">
            <span className="account__label">Электронная почта</span>
            <span className="account__text">{user.email}</span>
          </div>
        </div>
      </div>
      <Button
        className="account__btn btn btn--primary"
        type="button"
        isLoading={isLoading}
        onClick={onLogout}
      >
        {isLoading ? <Loader modifier="loader--btn" /> : 'Выйти из аккаунта'}
      </Button>
    </>
  )
}
