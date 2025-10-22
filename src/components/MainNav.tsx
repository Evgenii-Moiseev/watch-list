import { NavLink } from 'react-router-dom'
import IconGenres from '../assets/svg/genres-icon.svg?react'

export const MainNav = () => {
  return (
    <nav className="main-nav">
      <NavLink to={'../'} className="main-nav__link">
        <span className="main-nav__text">Главная</span>
      </NavLink>
      <NavLink to={'../movie/genres'} className="main-nav__link">
        <span className="main-nav__text">Жанры</span>
        <IconGenres className="main-nav__icon" width={24} height={24} />
      </NavLink>
    </nav>
  )
}
