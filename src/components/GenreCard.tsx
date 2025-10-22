import type { FC } from 'react'
import type { IGenreCardProps } from '../app/types'

export const GenreCard: FC<IGenreCardProps> = ({ title, img }) => {
  return (
    <div className="genre-card">
      <img
        className="genre-card__img"
        src={img}
        alt={`Кадр из фильма в жанре: "${title}"`}
      />
      <div className="genre-card__bottom">
        <h2 className="genre-card__title">{title}</h2>
      </div>
    </div>
  )
}
