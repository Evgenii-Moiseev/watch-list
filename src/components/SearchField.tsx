import { useEffect, useRef, type FC } from 'react'
import ClearSearchIcon from '../assets/svg/search-close-icon.svg?react'
import SearchIcon from '../assets/svg/search-icon.svg?react'
import type { ISearchFieldProps } from '../app/types'
import { Button } from '../ui/Button'
import { Overlay } from './Overlay'

export const SearchField: FC<ISearchFieldProps> = ({
  value,
  onChange,
  onClear,
  isMobile,
  isSearchOpen,
  setIsSearchOpen,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isSearchOpen && isMobile && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isSearchOpen, isMobile])

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev)
  }

  return (
    <>
      {isMobile ? (
        <>
          {!isSearchOpen && (
            <Button
              className="btn search-field__mobile-btn"
              type="button"
              onClick={toggleSearch}
            >
              <SearchIcon
                className="search-field__mobile-icon"
                width={24}
                height={24}
              />
            </Button>
          )}
          {isSearchOpen && (
            <>
              <div className="search-field">
                <input
                  ref={inputRef}
                  className="search-field__input"
                  type="search"
                  placeholder="Поиск"
                  id="search"
                  value={value}
                  onChange={onChange}
                />
                <SearchIcon
                  className={`search-field__icon ${value && isMobile ? 'search-field__icon--active' : ''}`}
                  width={24}
                  height={24}
                />
                <Button
                  className={`search-field__btn ${value || isMobile ? '' : 'visually-hidden'}`}
                  type="button"
                  onClick={() => {
                    onClear()
                    setIsSearchOpen(false)
                  }}
                >
                  <ClearSearchIcon
                    className="search-field__close-icon"
                    width={24}
                    height={24}
                  />
                </Button>
              </div>
              <Overlay />
            </>
          )}
        </>
      ) : (
        <div className="search-field">
          <input
            ref={inputRef}
            className="search-field__input"
            type="search"
            placeholder="Поиск"
            id="search"
            value={value}
            onChange={onChange}
          />
          <SearchIcon className="search-field__icon" width={24} height={24} />
          <Button
            className={`search-field__btn ${value ? '' : 'visually-hidden'}`}
            type="button"
            onClick={onClear}
          >
            <ClearSearchIcon
              className="search-field__close-icon"
              width={24}
              height={24}
            />
          </Button>
        </div>
      )}
    </>
  )
}
