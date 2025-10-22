import { GenresSchema, MovieSchema, MoviesSchema, } from './types';
export const validateMovieResponse = (response) => {
    const validatedData = MovieSchema.safeParse(response);
    if (validatedData.success) {
        return validatedData.data;
    }
    else {
        throw new Error('Invalid server response data');
    }
};
export const validateMoviesResponse = (response) => {
    const validatedData = MoviesSchema.safeParse(response);
    if (validatedData.success) {
        return validatedData.data;
    }
    else {
        throw new Error('Invalid server response data');
    }
};
export const validateGenresResponse = (response) => {
    const validatedData = GenresSchema.safeParse(response);
    if (validatedData.success) {
        return validatedData.data;
    }
    else {
        throw new Error('Invalid server response data');
    }
};
