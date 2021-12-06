import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { MoviesService } from 'src/app/services/movies/movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.scss']
})
export class SearchMoviesComponent implements OnInit {

  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef;
  searchValue = '';

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.subToInputEvent();
  }

  subToInputEvent(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((keyEvent: any) => {
        return keyEvent.target.value;
      })
      , debounceTime(500)
      , distinctUntilChanged(),
    )
      .subscribe((searchString: string) => {
        this.searchMovie(searchString);
      })
  }

  searchMovie(query: string): void {
    this.moviesService.searchByParameter(query);
  }

  clearSearch(): void {
    this.moviesService.searchByParameter('');
  }
}
