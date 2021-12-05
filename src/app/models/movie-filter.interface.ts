import {Movie} from './movie.interface'

export interface MovieFilterData {
    movies: Movie[];
    perPage: number;
    pageNumber: number;
    filter?: boolean;
}