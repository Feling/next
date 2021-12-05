import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { take } from 'rxjs';
import { Movie } from '../../models/movie.interface';
import { MoviesService } from '../../services/movies/movies.service';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit, AfterViewInit {

  @ViewChild('paginator') paginator: MatPaginator | undefined;

  public movies: Array<Movie> = [];
  public movieLength = 0;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMoviesFromServer();
    this.moviesService.getMovies().pipe().subscribe(moviesArr => {
      this.movies = moviesArr;
      this.movieLength = this.movies.length;
    });
    this.moviesService.clearPagination().subscribe((val) => {
      this.paginator?.firstPage();
    })
  }
  ngAfterViewInit(): void {
    // this.movieLength = this.movies.length;
  }



  openMovieDetails(selectedMovie: Movie) {
    this.moviesService.openMovieDetails(selectedMovie);
  }

  pageChanged(event: PageEvent) {
    this.moviesService.paginatroPageChanged(event.pageIndex, this.movies);
  }

}
