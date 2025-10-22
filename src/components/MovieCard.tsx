import { useEffect, useState, type FC } from 'react'
import { MovieBtns } from './MovieBtns'
import { MovieFeatures } from './MovieFeatures'
import type { IMovieCardProps } from '../app/types'
import { VideoPlayer } from './VideoPlayer'
import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
} from '../app/favoritesApiSlice'
import { getIsFavorite } from '../utils/getIsFavovite'
import { setIsAuthModalOpen } from '../app/authModalSlice'
import { useGetProfileQuery } from '../app/authApiSlice'
import { useDispatch } from 'react-redux'
import { Modal } from './Modal'

export const MovieCard: FC<IMovieCardProps> = ({ movie, onUpdate, page }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [addToFavorites, { isLoading: isAddLoading, isSuccess: isAddSuccess }] =
    useAddToFavoritesMutation()
  const [
    deleteFromFavorites,
    { isLoading: isDeleteLoading, isSuccess: isDeleteSuccess },
  ] = useDeleteFromFavoritesMutation()
  const { data: user, refetch } = useGetProfileQuery()

  const dispatch = useDispatch()

  let isFavorite = false

  if (user) {
    isFavorite = getIsFavorite(String(movie.id), user.favorites)
  }

  const isFavoritesActionLoading = isAddLoading || isDeleteLoading

  useEffect(() => {
    if (isAddSuccess) {
      refetch()
    }
  }, [isAddSuccess, refetch])

  useEffect(() => {
    if (isDeleteSuccess) {
      refetch()
    }
  }, [isDeleteSuccess, refetch])

  const handleFavoritesClick = () => {
    if (!user) {
      dispatch(setIsAuthModalOpen(true))
    } else {
      if (isFavorite) {
        deleteFromFavorites(movie.id)
      } else {
        addToFavorites(String(movie.id))
      }
    }
  }

  const openModal = () => {
    setIsVideoModalOpen(true)
  }

  const closeModal = () => {
    setIsVideoModalOpen(false)
  }

  return (
    <>
      <section className="movie-intro">
        <div className="container">
          <div className="movie-intro__wrap">
            <div className="movie-intro__inner">
              <div className="movie-intro__info">
                <MovieFeatures movie={movie} />
                {page === 'main' ? (
                  <h2 className="movie-intro__title">{movie.title}</h2>
                ) : (
                  <h1 className="movie-intro__title">{movie.title}</h1>
                )}
                {movie.plot && (
                  <p className="movie-intro__descr">{movie.plot}</p>
                )}
              </div>
              <MovieBtns
                page={page}
                onUpdate={onUpdate}
                movieID={movie.id}
                onModalOpen={openModal}
                onFavoritesClick={handleFavoritesClick}
                isFavorite={isFavorite}
                isFavoritesLoading={isFavoritesActionLoading}
              />
            </div>
            <div className="movie-intro__poster">
              {movie.backdropUrl ? (
                <img
                  className="movie-intro__image"
                  src={movie.backdropUrl}
                  alt={movie.title}
                  width={680}
                  height={552}
                />
              ) : (
                <img
                  className="movie-intro__image"
                  src="/random-movie-stub.jpg"
                  alt="Изображение катушки с кинопленкой"
                  width={680}
                  height={552}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      {isVideoModalOpen && (
        <Modal isOpen={isVideoModalOpen} onClose={closeModal} modifier="video">
          {movie.trailerUrl ? (
            <VideoPlayer url={movie.trailerUrl} title={movie.title} />
          ) : (
            <div className="trailer-error">Трейлер не найден</div>
          )}
        </Modal>
      )}
    </>
  )
}
