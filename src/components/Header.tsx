import { MainNav } from './MainNav'
import { SearchMovie } from './SearchMovie'
import { useGetProfileQuery } from '../app/authApiSlice'
import { Button } from '../ui/Button'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setIsAuthModalOpen } from '../app/authModalSlice'
import { Link } from 'react-router-dom'
import LogoIcon from '../assets/svg/logo-icon.svg?react'
import UserIcon from '../assets/svg/user-icon.svg?react'

export const Header = () => {
  const { data: user } = useGetProfileQuery()
  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(setIsAuthModalOpen(true))
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <Link to={'../'} className="header__link">
              <LogoIcon className="header__logo" width={143} height={32} />
            </Link>
            <div className="header__wrap">
              <MainNav />
              <SearchMovie />
            </div>
            {user ? (
              <NavLink to={'../account'} className="main-nav__link">
                <span className="main-nav__text">{user.surname}</span>
                <UserIcon className="main-nav__icon " width={24} height={24} />
              </NavLink>
            ) : (
              <Button
                className="btn btn--XL-font header__account-btn"
                type="button"
                onClick={openModal}
              >
                <span className="btn__text">Войти</span>
                <UserIcon className="main-nav__icon " width={24} height={24} />
              </Button>
            )}
          </div>
        </div>
      </header>
    </>
  )
}
