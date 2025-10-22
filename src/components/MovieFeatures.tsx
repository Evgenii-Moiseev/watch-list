import type { FC } from 'react'
import { Rating } from './Rating'
import { getRuntime } from '../utils/getRuntime'
import type { IMovieFeaturesProps } from '../app/types'

export const MovieFeatures: FC<IMovieFeaturesProps> = ({ movie, modifier }) => {
  return (
    <div
      className={`movie-features ${modifier ? `movie-features${modifier}` : ''}`}
    >
      {movie.tmdbRating !== null && movie.tmdbRating >= 0 && (
        <Rating rating={movie.tmdbRating} modifier={modifier} />
      )}
      {movie.releaseYear && (
        <span className="movie-features__text">{movie.releaseYear}</span>
      )}
      {movie.genres &&
        movie.genres.map((genre, index) => {
          return (
            <span className="movie-features__text" key={index}>
              {genre}
            </span>
          )
        })}
      {movie.runtime && (
        <span className="movie-features__text">
          {getRuntime(movie.runtime)}
        </span>
      )}
    </div>
  )
}
