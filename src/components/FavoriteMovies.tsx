import { Link } from 'react-router-dom'
import { MoviePosterCard } from '../components/MoviePosterCard'
import { Button } from '../ui/Button'
import CloseIcon from '../assets/svg/close-icon.svg?react'
import type { IFavoriteMoviesProps, Movie } from '../app/types'
import type { FC } from 'react'

export const FavoriteMovies: FC<IFavoriteMoviesProps> = ({
  movies,
  handleDelete,
  isDeleteLoading,
}) => {
  return (
    <>
      {movies.length > 0 ? (
        <ul className="account__list">
          {movies.map((movie: Movie) => {
            return (
              <li className="account__item" key={movie.id}>
                <Link className="account__link" to={`/movie/${movie.id}`}>
                  <MoviePosterCard movie={movie} />
                </Link>
                <Button
                  className="account__delete-btn btn"
                  type="button"
                  onClick={() => handleDelete(movie.id)}
                  isLoading={isDeleteLoading}
                >
                  <CloseIcon width={40} height={40} />
                </Button>
              </li>
            )
          })}
        </ul>
      ) : (
        <span className="account__favorites-empty">
          Вы пока не добавили фильмы в избранное
        </span>
      )}
    </>
  )
}
