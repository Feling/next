import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PaginationService } from 'src/app/services/pagination.service';
import { Movie } from '../../models/movie.interface';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator | undefined;

  public movies: Array<Movie> = [];
  public paginatedMovies: Array<Movie> = [];
  public movieLength = 0;
  constructor(private moviesService: MoviesService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.moviesService.getMoviesFromServer();
    this.moviesService.getMovies().pipe().subscribe(moviesArr => {
      this.movieLength = moviesArr.length;
      this.movies = moviesArr;
      this.paginator?.firstPage();
      this.paginatedMovies = this.paginationService.paginateArray(moviesArr, 12, 1);
    });
  }

  openMovieDetails(selectedMovie: Movie) {
    this.moviesService.openMovieDetails(selectedMovie);
  }

  pageChanged(event: PageEvent) {
    this.paginatedMovies = this.paginationService.paginatroPageChanged(event.pageIndex, this.movies);
  }

}
