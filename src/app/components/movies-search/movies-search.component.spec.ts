import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MoviesService } from 'src/app/services/movies/movies.service';

import { SearchMoviesComponent } from './movies-search.component';

const moviesServiceSpy = jasmine.createSpyObj('MoviesService', ['searchByParameter']);

describe('SearchMoviesComponent', () => {
  let component: SearchMoviesComponent;
  let fixture: ComponentFixture<SearchMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{
        provide: MoviesService, useValue: moviesServiceSpy
      }],
      declarations: [ SearchMoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should serach for movie with query string', () => {
    component.searchMovie('test')
    expect(moviesServiceSpy.searchByParameter).toHaveBeenCalledWith('test');
  });

  it('should clear search', () => {
    component.clearSearch()
    expect(moviesServiceSpy.searchByParameter).toHaveBeenCalledWith('');
  });
});
