import { Link } from 'react-router-dom'
import { MoviePosterCard } from './MoviePosterCard'
import { memo, type FC } from 'react'
import type { ITopMoviesProps } from '../app/types'

const TopMovies: FC<ITopMoviesProps> = ({ movies }) => {
  return (
    <section className="top-movies">
      <div className="container">
        <h2 className="top-movies__title">Топ 10 фильмов</h2>
        <ul className="top-movies__list">
          {movies &&
            movies.map((movie, index) => {
              return (
                <li className="top-movies__item" key={movie.id}>
                  <Link to={`/movie/${movie.id}`} className="top-movies__link">
                    <MoviePosterCard index={index + 1} movie={movie} />
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </section>
  )
}

export const MemoTopMovies = memo(TopMovies)
