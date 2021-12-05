import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/models/movie.interface';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {


  @Input()  movie: Movie = {} as any as Movie;
  @Output() movieDetailsSelect = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit(): void {
  }

  movieDetailsClicke(selectedMovie: Movie) {
    this.movieDetailsSelect.emit(selectedMovie);
  }

}
