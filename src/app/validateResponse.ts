import {
  GenresSchema,
  MovieSchema,
  MoviesSchema,
  type Genres,
  type Movie,
  type Movies,
} from './types'

export const validateMovieResponse = (response: unknown): Movie => {
  const validatedData = MovieSchema.safeParse(response)
  if (validatedData.success) {
    return validatedData.data
  } else {
    throw new Error('Invalid server response data')
  }
}

export const validateMoviesResponse = (response: unknown): Movies => {
  const validatedData = MoviesSchema.safeParse(response)
  if (validatedData.success) {
    return validatedData.data
  } else {
    throw new Error('Invalid server response data')
  }
}

export const validateGenresResponse = (response: unknown): Genres => {
  const validatedData = GenresSchema.safeParse(response)
  if (validatedData.success) {
    return validatedData.data
  } else {
    throw new Error('Invalid server response data')
  }
}
