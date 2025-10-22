import { useState, useEffect, type ChangeEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useGetMoviesByTitleQuery } from '../app/movieApiSlice'
import { SearchField } from './SearchField'
import { SearchResult } from './SearchResult'
import { useDebounce } from 'use-debounce'
import { Overlay } from './Overlay'

export const SearchMovie = () => {
  const [searchParams, setSearchParams] = useSearchParams('')
  const [searchTerm, setSearchTerm] = useState(searchParams.get('title') || '')
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500)
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)

  useEffect(() => {
    if (debouncedSearchTerm) {
      setSearchParams({ title: debouncedSearchTerm })
    } else {
      const newParams = new URLSearchParams(searchParams)
      newParams.delete('title')
      setSearchParams(newParams)
    }
  }, [debouncedSearchTerm, setSearchParams, searchParams])

  const handleSearchMovies = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  const { data: movies, isError } = useGetMoviesByTitleQuery(
    debouncedSearchTerm,
    {
      skip: !debouncedSearchTerm,
    }
  )

  const searchResult = movies?.slice(0, 5) || []

  const handleCloseSearch = () => {
    setSearchTerm('')
    setIsSearchOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      const mobileSize = window.innerWidth < 768
      setIsMobile(mobileSize)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (searchTerm) {
      setIsSearchOpen(true)
    } else {
      setIsSearchOpen(false)
    }
  }, [searchTerm])

  return (
    <div className="search">
      <SearchField
        value={searchTerm}
        onChange={handleSearchMovies}
        onClear={handleCloseSearch}
        isMobile={isMobile}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      {isError ? (
        <div className="search__result search__empty">
          <div className="search__empty">Не удалось получить данные.</div>
        </div>
      ) : (
        isSearchOpen &&
        movies &&
        searchTerm && (
          <SearchResult
            movies={searchResult}
            clearSearchTerm={handleCloseSearch}
            isMobile={isMobile}
            setIsSearchOpen={setIsSearchOpen}
          />
        )
      )}

      {(isError || (movies && searchTerm)) && !isMobile && <Overlay />}
    </div>
  )
}
