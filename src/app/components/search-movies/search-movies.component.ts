import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { SearchMoviesService } from 'src/app/services/search-movies.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  @ViewChild('searchInput', { static: true })
  searchInput!: ElementRef;

  searchValue = '';


  constructor(private searchMoviesService: SearchMoviesService) { }

  ngOnInit(): void {
    this.subToInputEvent();
  }

  subToInputEvent() {
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((keyEvent: any) => {
        if (keyEvent.target.value === '') {
          this.clearSearch();
        }
        return keyEvent.target.value;
      })
      , debounceTime(100)
      , distinctUntilChanged(),
    )
    .subscribe((searchString: string) => {
      this.searchMovie(searchString);
    })
  }

  searchMovie(query: string) {
    this.searchMoviesService.searchMovie(query);
  }


  clearSearch() {
    this.searchMoviesService.searchMovie('');
  }
}
