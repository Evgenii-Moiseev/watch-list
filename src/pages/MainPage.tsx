import { MemoTopMovies } from '../components/TopMovies'
import { useGetRandomMovieQuery } from '../app/movieApiSlice'
import { useGetTopMoviesQuery } from '../app/movieApiSlice'
import { Loader } from '../components/Loader'
import { DataError } from '../components/DataError'
import { useCallback } from 'react'
import { MovieCard } from '../components/MovieCard'

const MainPage = () => {
  const {
    data: movie,
    error: randomQueryError,
    isLoading: isRandomQueryLoading,
    refetch,
  } = useGetRandomMovieQuery()
  const {
    data: movies,
    error: topQueryError,
    isLoading: isTopQueryLoading,
  } = useGetTopMoviesQuery()

  const handleUpdate = useCallback(() => {
    refetch()
  }, [refetch])

  if (isRandomQueryLoading || isTopQueryLoading) {
    return <Loader />
  }

  if (randomQueryError || topQueryError) {
    return <DataError />
  }

  return (
    <>
      <h1 className="visually-hidden">
        Главная страница онлайн-платформы ВK Маруся
      </h1>
      {movie && movies && (
        <>
          <MovieCard page="main" movie={movie} onUpdate={handleUpdate} />
          <MemoTopMovies movies={movies} />
        </>
      )}
    </>
  )
}

export default MainPage
