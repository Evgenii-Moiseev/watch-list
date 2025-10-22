import { type FC } from 'react'
import { MovieFeatures } from './MovieFeatures'
import type { IMovieSearchCardProps } from '../app/types'

export const MovieSearchCard: FC<IMovieSearchCardProps> = ({ movie }) => {
  return (
    <div className="search-card">
      {movie.posterUrl ? (
        <img
          className="search-card__image"
          src={movie.posterUrl}
          alt={movie.title}
          width={40}
          height={52}
        />
      ) : (
        <img
          className="search-card__image"
          src="/search-movie-stub.jpg"
          alt="Изображение кинопленки"
          width={40}
          height={52}
        />
      )}
      <div className="search-card__info">
        <MovieFeatures movie={movie} modifier="--small" />
        <span className="search-card__title">{movie.title}</span>
      </div>
    </div>
  )
}
