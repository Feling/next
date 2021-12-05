import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }

  paginateArray(arr: Movie[], itempsPerPage: number, pageNumber: number) {
    let movies = arr.slice((pageNumber - 1) * itempsPerPage, pageNumber * itempsPerPage)
   return movies;
  }

  paginatroPageChanged(pageIndex: number, movies: Movie[]) {
   return this.paginateArray(movies, 12, pageIndex + 1);
  }
}
