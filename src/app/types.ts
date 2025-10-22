import z from 'zod'
import type { ChangeEvent, HTMLAttributes } from 'react'

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  originalTitle: z.string().nullable(),
  language: z.string().nullable(),
  releaseYear: z.number().nullable(),
  releaseDate: z.string().nullable(),
  genres: z.array(z.string()).nullable(),
  plot: z.string().nullable(),
  runtime: z.number().nullable(),
  budget: z.string().nullable(),
  revenue: z.string().nullable(),
  homepage: z.string().nullable(),
  status: z.string().nullable(),
  posterUrl: z.string().nullable(),
  backdropUrl: z.string().nullable(),
  trailerUrl: z.string().nullable(),
  trailerYoutubeId: z.string().nullable().optional(),
  tmdbRating: z.number().nullable(),
  searchL: z.string().nullable(),
  keywords: z.array(z.string()).nullable(),
  countriesOfOrigin: z.array(z.string()).nullable(),
  languages: z.array(z.string()).nullable(),
  cast: z.array(z.string()).nullable(),
  director: z.string().nullable(),
  production: z.string().nullable(),
  awardsSummary: z.string().nullable(),
})

export type Movie = z.infer<typeof MovieSchema>
export const MoviesSchema = z.array(MovieSchema)
export type Movies = z.infer<typeof MoviesSchema>

export const GenresSchema = z.array(z.string())
export type Genres = z.infer<typeof GenresSchema>

export interface IMovieCardProps {
  movie: Movie
  page: 'main' | 'movie'
  onUpdate?: () => void
}

export interface IMovieFeaturesProps {
  movie: Movie
  modifier?: string
}

export interface IAboutButtonProps {
  id: number
}

export interface IFavoritesButtonProps {
  onClick: () => void
  isFavorite: boolean
  isLoading: boolean
}

export interface ITrailerButtonProps {
  onClick: () => void
}

export interface IUpdateButtonProps {
  onClick?: () => void
}

export interface ITopMoviesProps {
  movies?: Movies
}

export interface IGenreInfo {
  name: string
  nameRU: string
  image: string
}

export interface IMovieFeaturesProps {
  movie: Movie
}

export interface IMovieButtonsProps {
  movieID: number | null
  page: 'main' | 'movie'
  onUpdate?: () => void
  onModalOpen: () => void
  onFavoritesClick: () => void
  isFavorite: boolean
  isFavoritesLoading: boolean
}

export interface IFavoriteMoviesProps {
  movies: Movies
  handleDelete: (id: number) => void
  isDeleteLoading: boolean
}

export interface IAccountSettingsProps {
  user: IProfileResponse
  isLoading: boolean
  onLogout: () => void
}

export type TUserRegisterData = {
  email: string
  password: string
  name: string
  surname: string
}

export type TLoginData = Pick<TUserRegisterData, 'email' | 'password'>

export interface IAuthResponse {
  result: boolean
}

export interface IProfileResponse {
  name: string
  surname: string
  email: string
  favorites: string[]
}

export interface IDeleteFavoritesResponse {
  movieId: number
}

export interface IGenreCardProps {
  title: string
  img: string
}

export interface IGenreProps {
  genres: Array<string>
}

export const LoginFormDataSchema = z.object({
  email: z.email('Некорректный email').trim().nonempty('Обязательное поле'),
  password: z.string().trim().nonempty('Обязательное поле'),
})

export type LoginFormData = z.infer<typeof LoginFormDataSchema>

export interface IloginFormProps {
  onLogin: () => void
}

export const RegisterFormDataSchema = z
  .object({
    email: z.email('Некорректный email').trim(),
    name: z.string().trim().nonempty('Обязательное поле'),
    surname: z.string().trim().nonempty('Обязательное поле'),
    password: z.string().trim().nonempty('Обязательное поле'),
    confirm: z.string().trim().nonempty('Обязательное поле'),
  })
  .refine((data) => data.password === data.confirm, {
    message: 'Пароли не совпадают',
    path: ['confirm'],
  })

export interface IRegisterFormProps {
  onSuccess: () => void
}

export type RegisterFormData = z.infer<typeof RegisterFormDataSchema>

export interface IModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  modifier?: string
}

export interface IModalState {
  isOpen: boolean
}

export interface IMoviePosterCard {
  movie: Movie
  index?: number
}

export interface IMovieSearchCardProps {
  movie: Movie
}

export interface IPlayPauseButtonProps {
  isHover: boolean
}

export interface IPosterCardStubProps {
  title: string
}

export interface IRatingProps {
  rating: number
  modifier?: string
}

export interface ISearchFieldProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  isMobile: boolean
  isSearchOpen: boolean
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface ISearchResultProps {
  movies: Movies | []
  clearSearchTerm: () => void
  isMobile: boolean
  setIsSearchOpen: (open: boolean) => void
}

export interface IVideoPlayerProps {
  title: string
  url: string
}

export interface IIconProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  width?: number
  height?: number
}

export interface MutationState {
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
}

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  isDisabled?: boolean
  type?: 'submit' | 'button' | 'reset'
}
