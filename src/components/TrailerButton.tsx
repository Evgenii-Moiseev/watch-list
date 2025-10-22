import type { FC } from 'react'
import { Button } from '../ui/Button'
import type { ITrailerButtonProps } from '../app/types'

export const TrailerButton: FC<ITrailerButtonProps> = ({ onClick }) => {
  return (
    <Button className="btn btn--primary" type="button" onClick={onClick}>
      Трейлер
    </Button>
  )
}
