import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Movie } from 'src/app/models/movie.interface';
import { DialogService } from '../dialog/dialog.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient, public dialogService: DialogService) { }

  public _movies: Movie[] = []
  public _filtredMovies: Movie[] = [];
  movies = new BehaviorSubject<Movie[]>([]);
  movies$ = this.movies.asObservable();


  handleError(error: HttpErrorResponse) {
    console.log('error caught in service')
    console.error(error);
    return throwError(() => new Error('Something bad happened; please try again later.'))
  }

  setMovies(movies: Movie[]): void {
    this.movies.next(movies);
  }

  getMovies(): Observable<Movie[]> {
    return this.movies$;
  }

  getMoviesFromServer(): void {
    this.httpClient.get<Array<Movie>>('http://localhost:3000/movies').pipe(catchError(this.handleError)).subscribe((movies: Movie[]) => {
      this._movies = movies;
      this.setMovies(movies);
      return;
    })
  }

  openMovieDetails(movieDetails: Movie): void {
    this.dialogService.openMovieDetail(movieDetails);
  }

  searchByParameter(query: string): void {
    if (query === "") {
      this.setMovies(this._movies);
      this._filtredMovies = this._movies;
    } else {
      this._filtredMovies = this._movies.filter((movie: Movie) => movie.title.toLowerCase().includes(query.toLowerCase()));
      this.setMovies(this._filtredMovies);
    }
  }
}
