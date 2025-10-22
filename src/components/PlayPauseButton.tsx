import type { FC } from 'react'
import PlayerPauseIcon from '../assets/svg/player-pause.svg?react'
import PlayerPlayIcon from '../assets/svg/player-play.svg?react'
import type { IPlayPauseButtonProps } from '../app/types'

export const PlayPauseButton: FC<IPlayPauseButtonProps> = ({ isHover }) => {
  return (
    <>
      {isHover ? (
        <PlayerPlayIcon className="trailer__icon" width={80} height={80} />
      ) : (
        <PlayerPauseIcon className="trailer__icon" width={80} height={80} />
      )}
    </>
  )
}
