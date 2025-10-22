import type { FC } from 'react'
import type { IPosterCardStubProps } from '../app/types'

export const PosterCardStub: FC<IPosterCardStubProps> = ({ title }) => {
  return (
    <div className="poster-card__stub">
      <img
        src="/poster-card-stub.jpg"
        alt="Изображение катушки с кинопленкой"
        width={224}
        height={224}
      />
      <span className="poster-card__title">{title}</span>
    </div>
  )
}
