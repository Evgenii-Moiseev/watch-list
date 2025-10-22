import type { FC } from 'react'
import { AboutButton } from './AboutButton'
import { FavoritesButton } from './FavoritesButton'
import { TrailerButton } from './TrailerButton'
import { UpdateButton } from './UpdateButton'
import type { IMovieButtonsProps } from '../app/types'

export const MovieBtns: FC<IMovieButtonsProps> = ({
  movieID,
  page,
  onUpdate,
  onModalOpen,
  onFavoritesClick,
  isFavorite,
  isFavoritesLoading,
}) => {
  return (
    <div
      className={`movie-intro__btns ${page !== 'main' ? 'movie-intro__btns--movie-page' : ''}`}
    >
      {page === 'main' ? (
        <>
          <TrailerButton onClick={onModalOpen} />
          {movieID && <AboutButton id={movieID} />}
          <FavoritesButton
            onClick={onFavoritesClick}
            isFavorite={isFavorite}
            isLoading={isFavoritesLoading}
          />
          <UpdateButton onClick={onUpdate} />
        </>
      ) : (
        <>
          <TrailerButton onClick={onModalOpen} />
          <FavoritesButton
            onClick={onFavoritesClick}
            isFavorite={isFavorite}
            isLoading={isFavoritesLoading}
          />
        </>
      )}
    </div>
  )
}
