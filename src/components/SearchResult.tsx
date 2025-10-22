import type { FC } from 'react'
import { MovieSearchCard } from './MovieSearchCard'
import { Link } from 'react-router-dom'
import type { ISearchResultProps } from '../app/types'

export const SearchResult: FC<ISearchResultProps> = ({
  movies,
  clearSearchTerm,
  isMobile,
  setIsSearchOpen,
}) => {
  const handleLinkClick = () => {
    clearSearchTerm()
    if (isMobile) {
      setIsSearchOpen(false)
    }
  }

  return (
    <div className="search__result">
      {movies.length === 0 ? (
        <div className="search__empty">Фильм с таким названием не найден</div>
      ) : (
        <ul className="search__list">
          {movies.map((movie) => {
            return (
              <li className="search__item" key={movie.id}>
                <Link
                  to={`/movie/${movie.id}`}
                  className="search__link"
                  onClick={handleLinkClick}
                >
                  <MovieSearchCard movie={movie} />
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
