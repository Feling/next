import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { Movie } from 'src/app/models/movie.interface';
import { DialogService } from '../dialog.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  // The response body may contain clues as to what went wrong.

  constructor(private httpClient: HttpClient, public dialogService: DialogService) { }

  private _movies: Movie[] = []
  private _filtredMovies: Movie[] = [];

  movies = new BehaviorSubject<Movie[]>([]);
  movies$ = this.movies.asObservable();

  paginationCleared = new BehaviorSubject<boolean>(false);
  paginationCleared$ = this.paginationCleared.asObservable();

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  setMovies(movies: Movie[]) {
    this.movies.next(movies);
  }

  getMovies() {
    return this.movies$;
  }

  getMoviesFromServer(): void {
    this.httpClient.get<Array<Movie>>('http://localhost:3000/movies').pipe(catchError(this.handleError)).subscribe((movies: Movie[]) => {
      this.paginateArray(movies, 12, 1);
      this._movies = movies;
      this._filtredMovies = movies;
      return;
    })
  }

  openMovieDetails(movieDetails: Movie) {
    this.dialogService.openMovieDetail(movieDetails);
  }

  getMovieById(id: string) {
  }

  searchByParametr(query: string) {
    if (query === "") {
      this.paginateArray(this._movies, 12, 1);
      this._filtredMovies = this._movies;
      this.paginationCleared.next(true);
    } else {
      this._filtredMovies = this._movies.filter((movie: Movie) => movie.title.toLowerCase().includes(query.toLowerCase()));
      this.paginateArray(this._filtredMovies, 12, 1);
    }
  }

  paginateArray(arr: Movie[], itempsPerPage: number, pageNumber: number) {
    this.setMovies(arr.slice((pageNumber - 1) * itempsPerPage, pageNumber * itempsPerPage));
  }

  paginatroPageChanged(pageIndex: number, movies: Movie[]) {
    this.paginateArray(this._filtredMovies, 12, pageIndex + 1);
  }

  clearPagination() {
    return this.paginationCleared$;
  }

}
