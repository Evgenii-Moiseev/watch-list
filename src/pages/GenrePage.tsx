import { useSearchParams } from 'react-router-dom'
import { useGetMoviesByGenreQuery } from '../app/movieApiSlice'
import { getGenreData } from '../utils/getGenreData'
import { Link } from 'react-router-dom'
import { MoviePosterCard } from '../components/MoviePosterCard'
import BackIcon from '../assets/svg/arrow-icon.svg?react'
import { useEffect, useRef, useState } from 'react'
import { Loader } from '../components/Loader'
import { DataError } from '../components/DataError'
import type { Movies } from '../app/types'
import { Button } from '../ui/Button'

const GenrePage = () => {
  const [searchParams] = useSearchParams()
  const genre = searchParams.get('genre') || ''
  const genreData = getGenreData(genre)
  const [movies, setMovies] = useState<Movies>([])
  const [page, setPage] = useState(0)
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(false)
  const [isPageEnds, setIsPageEnds] = useState(false)
  const [isNextPage, setIsNextPage] = useState(true)

  const { data, isLoading, isError } = useGetMoviesByGenreQuery({ genre, page })

  const checkIfMoviesFit = () => {
    const windowHeight = window.innerHeight
    const header = (document.querySelector('.header') as HTMLElement) || null
    const footer = (document.querySelector('.footer') as HTMLElement) || null
    const genre = (document.querySelector('.genre') as HTMLElement) || null
    if (!header || !footer || !genre) {
      return
    }
    const contentHeight =
      header.offsetHeight + footer.offsetHeight + genre.offsetHeight

    if (contentHeight <= windowHeight) {
      setShowLoadMoreButton(true)
    } else {
      setShowLoadMoreButton(false)
    }
  }

  useEffect(() => {
    checkIfMoviesFit()
  }, [movies])

  useEffect(() => {
    const handleResize = () => {
      checkIfMoviesFit()
    }

    window.addEventListener('resize', handleResize)
    checkIfMoviesFit()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleShowMore = () => {
    if (isNextPage && !isLoading) {
      setPage((prev) => prev + 1)
    }
  }

  const canLoadMoreRef = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 150
      ) {
        if (!isPageEnds && isNextPage && !isLoading && canLoadMoreRef.current) {
          canLoadMoreRef.current = false
          setPage((prev) => prev + 1)
        }
      } else {
        setIsPageEnds(false)
        canLoadMoreRef.current = true
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      setMovies([])
      setIsNextPage(true)
      canLoadMoreRef.current = true
    }
  }, [isPageEnds, isNextPage, isLoading])

  useEffect(() => {
    if (data) {
      setMovies((prevMovies) => [...prevMovies, ...data])
    }
    if (data && data.length < 10) {
      setIsNextPage(false)
    }
  }, [data])

  useEffect(() => {
    if (isPageEnds && isNextPage) {
      setPage((prevPage) => prevPage + 1)
    }
  }, [isPageEnds, isNextPage])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <DataError />
  }

  return (
    <section className="genre">
      <div className="container">
        <div className="genre__top">
          <Link to={'../movie/genres'} className="genre__back-link">
            <BackIcon className="genre__icon" width={40} height={40} />
          </Link>
          <h1 className="genre__title">{genreData.nameRU}</h1>
        </div>
        <div className="genre__wrap">
          <ul className="genre__list">
            {movies &&
              movies.map((movie) => {
                return (
                  <li className="genre__item" key={movie.id}>
                    <Link className="genre__link" to={`../movie/${movie.id}`}>
                      <MoviePosterCard movie={movie} />
                    </Link>
                  </li>
                )
              })}
          </ul>
          {showLoadMoreButton && (
            <Button
              className="btn btn--primary"
              type="button"
              onClick={handleShowMore}
              isLoading={isLoading}
            >
              Показать еще
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default GenrePage
