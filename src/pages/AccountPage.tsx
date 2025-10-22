import { useEffect, useState } from 'react'
import FavoritesIcon from '../assets/svg/favorites-icon.svg?react'
import UserIcon from '../assets/svg/user-icon.svg?react'
import { useGetProfileQuery, useLogoutMutation } from '../app/authApiSlice'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/Button'
import { Loader } from '../components/Loader'
import {
  favoritesApiSlice,
  useGetFavoritesQuery,
} from '../app/favoritesApiSlice'
import { useDeleteFromFavoritesMutation } from '../app/favoritesApiSlice'
import { useDispatch } from 'react-redux'
import { FavoriteMovies } from '../components/FavoriteMovies'
import { AccountSettings } from '../components/AccountSettings'

const AccountPage = () => {
  const [accountState, setAccountState] = useState('favorites')
  const {
    data: user,
    isLoading: isUserDataLoading,
    isError: isUserDataError,
    refetch: refetchUser,
  } = useGetProfileQuery()
  const {
    data: movies,
    isLoading: isFavoritesLoading,
    isError: isFavoritesError,
    refetch: refetchFavorites,
  } = useGetFavoritesQuery()
  const [
    deleteFromFavorites,
    { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },
  ] = useDeleteFromFavoritesMutation()
  const [logout, { isLoading }] = useLogoutMutation()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if ((!user && !isUserDataLoading) || isUserDataError) {
      navigate('/')
    }
  }, [user, isUserDataLoading, isUserDataError, navigate])

  const handleLogout = async () => {
    await logout()
    dispatch(favoritesApiSlice.util.resetApiState())
    navigate('/')
  }

  const handleSwitch = () => {
    setAccountState((prevState) =>
      prevState === 'favorites' ? 'settings' : 'favorites'
    )
  }

  useEffect(() => {
    if (isDeleteSuccess) {
      refetchFavorites()
      refetchUser()
    }
  }, [isDeleteSuccess, refetchFavorites, refetchUser])

  const handleDelete = (id: number) => {
    deleteFromFavorites(id)
  }

  if (isUserDataLoading || isFavoritesLoading) {
    return <Loader />
  }

  if (user) {
    return (
      <section className="account">
        <div className="container">
          <div className="account__wrap">
            <h1 className="account__title">Мой аккаунт</h1>
            <div className="account__tabs">
              <Button
                className={`btn btn--XL-font ${accountState === 'favorites' ? 'btn--active' : ''} `}
                type="button"
                onClick={handleSwitch}
              >
                <FavoritesIcon
                  className="account__icon"
                  width={24}
                  height={24}
                />
                <span className="account__tab-text">Избранные фильмы</span>
                <span className="account__tab-text-mobile">Избранное</span>
              </Button>
              <Button
                className={`btn btn--XL-font ${accountState === 'settings' ? 'btn--active' : ''} `}
                type="button"
                onClick={handleSwitch}
              >
                <UserIcon className="account__icon" width={24} height={24} />
                <span className="account__tab-text">Настройки аккаунта</span>
                <span className="account__tab-text-mobile">Настройки</span>
              </Button>
            </div>
            {accountState === 'favorites' && (
              <>
                {movies && (
                  <FavoriteMovies
                    movies={movies}
                    isDeleteLoading={isDeleteLoading}
                    handleDelete={handleDelete}
                  />
                )}
                {isFavoritesError && (
                  <span className="account__favorites-empty">
                    Не удалось получить данные...
                  </span>
                )}
              </>
            )}
            {accountState === 'settings' && (
              <AccountSettings
                user={user}
                isLoading={isLoading}
                onLogout={handleLogout}
              />
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default AccountPage
