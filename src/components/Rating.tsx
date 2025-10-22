import type { FC } from 'react'
import Star from '../assets/svg/star-icon.svg?react'
import { GOLD, GRAY, GREEN, RED } from '../app/variables'
import type { IRatingProps } from '../app/types'

export const Rating: FC<IRatingProps> = ({ rating, modifier }) => {
  let ratingColor: string = 'transparent'

  switch (true) {
    case rating >= 8.5:
      ratingColor = GOLD
      break
    case rating >= 7 && rating < 8.5:
      ratingColor = GREEN
      break
    case rating >= 5 && rating < 7:
      ratingColor = GRAY
      break
    case rating >= 0 && rating < 5:
      ratingColor = RED
      break
  }

  return (
    <div
      className={`rating ${modifier ? `rating${modifier}` : ''}`}
      style={{ backgroundColor: ratingColor }}
    >
      <Star className="rating__icon" width={16} height={16} />
      <span className="rating__text">{rating.toFixed(1)}</span>
    </div>
  )
}
