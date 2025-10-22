import { GENRES } from '../data/genresData'

export function getGenreData(genreName: string) {
  const genre = GENRES.find((genre) => genre.name === genreName)
  const unknownGenre = {
    nameRU: 'Неизвестный жанр',
    image: '/genre-stub.jpg',
  }
  return genre ? genre : unknownGenre
}
