import { useGetMovieGenresQuery } from '../app/movieApiSlice'
import { DataError } from '../components/DataError'
import { Genres } from '../components/Genres'
import { Loader } from '../components/Loader'

const GenresPage = () => {
  const { data: genres, isLoading, error } = useGetMovieGenresQuery()

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <DataError />
  }

  return <>{genres && <Genres genres={genres} />}</>
}

export default GenresPage
