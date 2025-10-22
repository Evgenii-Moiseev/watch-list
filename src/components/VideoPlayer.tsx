import { useState, type FC } from 'react'
import ReactPlayer from '../../node_modules/react-player'
import { PlayPauseButton } from './PlayPauseButton'
import type { IVideoPlayerProps } from '../app/types'

export const VideoPlayer: FC<IVideoPlayerProps> = ({ title, url }) => {
  const [playing, setPlaying] = useState(true)
  const [isHover, setIsHover] = useState(false)

  const handlePlayPause = () => {
    setPlaying(!playing)
    setIsHover(true)
  }

  const handleMouseEnter = () => {
    if (!playing) {
      setIsHover(true)
    }
  }

  const handleHoverLeave = () => {
    if (!playing) {
      setIsHover(false)
    }
  }

  return (
    <div
      className="trailer"
      onClick={handlePlayPause}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleHoverLeave}
    >
      <ReactPlayer
        src={url}
        playing={playing}
        controls={false}
        style={{ width: '100%', height: '100%' }}
        className="trailer__player"
      />

      {!playing && <PlayPauseButton isHover={isHover} />}

      {!playing && <span className="trailer__title">{title}</span>}
    </div>
  )
}
