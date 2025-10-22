import { Button } from '../ui/Button'
import FavoritesIcon from '../assets/svg/favorites-icon.svg?react'
import FavoritesIconActive from '../assets/svg/favorites-icon-active.svg?react'
import type { FC } from 'react'
import type { IFavoritesButtonProps } from '../app/types'

export const FavoritesButton: FC<IFavoritesButtonProps> = ({
  onClick,
  isFavorite,
  isLoading,
}) => {
  return (
    <Button
      className="btn btn--icon"
      onClick={onClick}
      isLoading={isLoading}
      type="button"
      aria-label={
        isFavorite
          ? 'Удалить фильм из избранного'
          : 'Добавить фильм в избранное'
      }
    >
      {isFavorite ? (
        <FavoritesIconActive className="btn__icon" width={24} height={24} />
      ) : (
        <FavoritesIcon className="btn__icon" width={24} height={24} />
      )}
    </Button>
  )
}
