import { GenreCard } from './GenreCard'
import { getGenreData } from '../utils/getGenreData'
import { Link } from 'react-router-dom'
import type { IGenreProps } from '../app/types'

export const Genres = ({ genres }: IGenreProps) => {
  return (
    <section className="genres">
      <div className="container">
        <h1 className="genres__title">Жанры фильмов</h1>
        <ul className="genres__list">
          {genres.map((genre, index) => {
            const genreData = getGenreData(genre)
            return (
              <li className="genres__item" key={index}>
                <Link className="genres__link" to={`/movie/?genre=${genre}`}>
                  <GenreCard title={genreData.nameRU} img={genreData.image} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
