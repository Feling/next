import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { MovieContainerComponent } from './movie-container.component';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { PaginationService } from 'src/app/services/pagination/pagination.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { of } from 'rxjs';

const MOVIES = [{
  "id": "207856",
  "title": "2001: A Space Odyssey",
  "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd8H3yW84QBZ7bXkGlzSmeKjpS8gUEV7S_zPN4qVOX7mQ0SNpyHlOkh0WGGlrARjpOZPFlZXyU4t5E8phADO9rq80g.jpg?r=43c",
  "synopsis": "While investigating the appearance of mysterious monoliths throughout the universe, two astronauts battle their ship&#39;s intelligent computer system.<br><b>New on 2020-06-18</b>",
  "rating": "8.3",
  "type": "movie",
  "released": "1968",
  "runtime": "2h28m",
  "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABbjUFYCF6qVcxBNZXhL_HIGhaNXLosDyYyg6v3WP9H1FLsGMBtJx1uy9R8pEMgz0gGzPLlcF9lgH5WjpB_jl4p6DmlDw.jpg?r=43c",
  "unogsdate": "2020-06-18",
  "imdbid": "tt0062622",
  "download": "0"
},
{
  "id": "215318",
  "title": "Ace Ventura: When Nature Calls",
  "image": "https://occ-0-1926-41.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABd2CXwqVibqQ6X3SBFL7ADm7zczv73tuNxCW2zDwA-4SEW5Nkdfnybwn5MXfVE1fHv4IBxtpYBkjF3EZQoqHKWkHkA.jpg?r=914",
  "synopsis": "Ace travels to the jungles of Africa to recover a rare white bat. But if he fails, a war with the violent Wachootoo tribe is sure to follow.<br><b>New on 2020-06-18</b>",
  "rating": "6.4",
  "type": "movie",
  "released": "1995",
  "runtime": "1h34m",
  "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABcAF9ZyRlOXNySt7A9ll31tYwgxUVPVtznPAqkz1L_R9iTfkyHQHK1w-3Kz0RKlXfl4KoWtU1nWkIO-dcjz1k-RYFE-6.jpg?r=914",
  "unogsdate": "2020-06-18",
  "imdbid": "tt0112281",
  "download": "1"
},
{
  "id": "234365",
  "title": "Against All Odds",
  "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603",
  "synopsis": "An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>",
  "rating": "5.9",
  "type": "movie",
  "released": "1984",
  "runtime": "2h1m",
  "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXIMhbibi12RBdfyOzXCHGhv-M4U5HJZxWy3P8C3b5HO-3yO_Nnpwr8RZP7fwzyMAv2XrMO-a6CXLVKFqi6JZYO9QYJU.jpg?r=603",
  "unogsdate": "2020-06-18",
  "imdbid": "tt0086859",
  "download": "1"
}]


describe('MovieContainerComponent', () => {
  const moviesServiceSpy = jasmine.createSpyObj('MoviesService', ['searchByParameter', 'getMoviesFromServer', 'getMovies', 'openMovieDetails']);
  const paginationServiceSpy = jasmine.createSpyObj('PaginationService', ['paginatroPageChanged', 'paginateArray']);
  
  let component: MovieContainerComponent;
  let fixture: ComponentFixture<MovieContainerComponent>;

  beforeEach(waitForAsync( () => {
    moviesServiceSpy.getMovies.and.returnValue(of(MOVIES));
    paginationServiceSpy.paginateArray.and.returnValue(of(MOVIES));
    paginationServiceSpy.paginatroPageChanged.and.returnValue(MOVIES);

    
     TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatDialogModule, MatPaginatorModule],
      providers: [{
        provide: MoviesService, useValue: moviesServiceSpy
      },{
        provide: PaginationService, useValue: paginationServiceSpy

      }],
      declarations: [ MovieContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open movie details', () => {
    component.openMovieDetails({
      "id": "234365",
      "title": "Against All Odds",
      "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603",
      "synopsis": "An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>",
      "rating": "5.9",
      "type": "movie",
      "released": "1984",
      "runtime": "2h1m",
      "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXIMhbibi12RBdfyOzXCHGhv-M4U5HJZxWy3P8C3b5HO-3yO_Nnpwr8RZP7fwzyMAv2XrMO-a6CXLVKFqi6JZYO9QYJU.jpg?r=603",
      "unogsdate": "2020-06-18",
      "imdbid": "tt0086859",
      "download": "1"
    })
    expect(moviesServiceSpy.openMovieDetails).toHaveBeenCalledWith({
      "id": "234365",
      "title": "Against All Odds",
      "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABQLRgUUEW1ERizQ0QVFwll7ldXWFoWGHUJ0wh3fJkp9URt6FSKMpSyitgnrc5qYufG_SHlL530HaRnxVZsyKL1uiDg.jpg?r=603",
      "synopsis": "An ex-football player agrees to track down a sleazy nightclub owner&#39;s mistress -- but when he finds the elusive woman in Mexico, he falls in love.<br><b>New on 2020-06-18</b>",
      "rating": "5.9",
      "type": "movie",
      "released": "1984",
      "runtime": "2h1m",
      "largeimage": "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXIMhbibi12RBdfyOzXCHGhv-M4U5HJZxWy3P8C3b5HO-3yO_Nnpwr8RZP7fwzyMAv2XrMO-a6CXLVKFqi6JZYO9QYJU.jpg?r=603",
      "unogsdate": "2020-06-18",
      "imdbid": "tt0086859",
      "download": "1"
    });
  });


  it('should change page', () => {

    component.pageChanged({pageIndex: 0} as any)
    expect(paginationServiceSpy.paginatroPageChanged).toHaveBeenCalledWith(0, MOVIES)
    expect(component.paginatedMovies).toEqual(MOVIES)
  });
});
