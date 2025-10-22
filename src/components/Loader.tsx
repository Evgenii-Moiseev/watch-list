import type { FC } from 'react'

interface ILoaderProps {
  modifier?: string
}

export const Loader: FC<ILoaderProps> = ({ modifier }) => {
  return (
    <span
      className={`loader ${modifier ? modifier : ''}`}
      data-testid="loader"
    ></span>
  )
}
