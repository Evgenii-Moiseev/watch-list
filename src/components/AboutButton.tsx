import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { IAboutButtonProps } from '../app/types'

export const AboutButton: FC<IAboutButtonProps> = ({ id }) => {
  return (
    <Link to={`/movie/${id}`} className="btn btn--secondary">
      О фильме
    </Link>
  )
}
