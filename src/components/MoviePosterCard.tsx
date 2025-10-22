import type { FC } from 'react'
import { PosterCardStub } from './PosterCardStub'
import type { IMoviePosterCard } from '../app/types'

export const MoviePosterCard: FC<IMoviePosterCard> = ({ movie, index }) => {
  return (
    <div className="poster-card">
      <div className="poster-card__wrap">
        {index && <span className="poster-card__index">{index}</span>}
        {movie.posterUrl ? (
          <img
            className="poster-card__img"
            src={movie.posterUrl}
            alt={movie.title}
            width={224}
            height={336}
          />
        ) : (
          <PosterCardStub title={movie.title} />
        )}
      </div>
    </div>
  )
}
