import { Button } from '../ui/Button'
import UpdateIcon from '../assets/svg/update-icon.svg?react'
import type { FC } from 'react'
import type { IUpdateButtonProps } from '../app/types'

export const UpdateButton: FC<IUpdateButtonProps> = ({ onClick }) => {
  return (
    <Button
      className="btn btn--icon"
      type="button"
      aria-label="Обновить случайный фильм"
      onClick={onClick}
    >
      <UpdateIcon className="btn__icon" width={24} height={24} />
    </Button>
  )
}
