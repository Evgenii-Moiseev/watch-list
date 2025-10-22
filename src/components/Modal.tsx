import type { FC } from 'react'
import { useState } from 'react'
import CloseIcon from '../assets/svg/close-icon.svg?react'
import type { IModalProps } from '../app/types'
import { Button } from '../ui/Button'

export const Modal: FC<IModalProps> = ({
  isOpen,
  onClose,
  children,
  modifier,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const handleClose = () => {
    setIsVisible(false)

    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (isOpen) {
    setTimeout(() => {
      setIsVisible(true)
    }, 300)
  }

  return (
    <div className={`modal ${isVisible ? 'modal--visible' : ''}`}>
      <div
        className={`modal__content ${isVisible ? 'modal__content--visible' : ''} ${modifier ? `modal__content--${modifier}` : ''} `}
      >
        <Button
          className="modal__close-btn btn"
          type="button"
          onClick={handleClose}
        >
          <CloseIcon width={48} height={48} />
        </Button>
        {children}
      </div>
    </div>
  )
}
