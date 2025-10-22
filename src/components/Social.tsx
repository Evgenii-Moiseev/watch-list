import { Link } from 'react-router-dom'
import OKIcon from '../assets/svg/ok-icon.svg?react'
import VKIcon from '../assets/svg/vk-icon.svg?react'
import YTIcon from '../assets/svg/youtube-icon.svg?react'
import TGIcon from '../assets/svg/telegram-icon.svg?react'

export const Social = () => {
  return (
    <div className="social">
      <ul className="social__list">
        <li className="social__item">
          <Link to={'https://vk.com'} className="social__link" target="_blank">
            <VKIcon className="social__icon" width={36} height={36} />
          </Link>
        </li>
        <li className="social__item">
          <Link
            to={'https://youtube.com'}
            className="social__link"
            target="_blank"
          >
            <YTIcon className="social__icon" width={36} height={36} />
          </Link>
        </li>
        <li className="social__item">
          <Link to={'https://ok.com'} className="social__link" target="_blank">
            <OKIcon className="social__icon" width={36} height={36} />
          </Link>
        </li>
        <li className="social__item">
          <Link
            to={'https://web.telegram.org/a/'}
            className="social__link"
            target="_blank"
          >
            <TGIcon className="social__icon" width={36} height={36} />
          </Link>
        </li>
      </ul>
    </div>
  )
}
