import { Injectable } from '@angular/core';
import { MoviesService } from './movies/movies.service';

@Injectable({
  providedIn: 'root'
})
export class SearchMoviesService {

  constructor(private moviesService: MoviesService) { }

  clearSearch() {
    throw new Error('Method not implemented.');
  }
  searchMovie(query: string) {
    this.moviesService.searchByParametr(query);
  }
}
