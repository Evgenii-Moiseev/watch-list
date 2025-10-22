import { useParams } from 'react-router-dom'
import { useGetMovieByIDQuery } from '../app/movieApiSlice'
import { MovieCard } from '../components/MovieCard'
import { AboutMovie } from '../components/AboutMovie'
import { Loader } from '../components/Loader'
import { DataError } from '../components/DataError'

const MoviePage = () => {
  const { movieID } = useParams<{ movieID: string }>()
  const {
    data: movie,
    isLoading,
    error,
  } = useGetMovieByIDQuery(Number(movieID))

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <DataError />
  }

  return (
    <>
      {movie && (
        <>
          <MovieCard movie={movie} page="movie" />
          <AboutMovie movie={movie} />
        </>
      )}
    </>
  )
}

export default MoviePage
