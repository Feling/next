import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/models/movie.interface';
import { DialogService } from '../dialog/dialog.service';

import { MoviesService } from './movies.service';

const dialogServiceSpy = jasmine.createSpyObj('DialogService', ['openMovieDetail']);

const MOVIES: Movie[] = [
  {
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
  }
]
const MOVIE: Movie =  {
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
}

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: DialogService, useValue: dialogServiceSpy }
      ]
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should handle http error', () => {
    let httpErrorMock = new HttpErrorResponse({ error: "error test" });
    expect(service.handleError(httpErrorMock)).toThrowError;
  });

  it('should emit movies', () => {
    service.setMovies(MOVIES)
    expect(service.movies).toHaveBeenCalled;
  });

  it('should open movie details', () => {
   
    service.openMovieDetails(MOVIE)
    expect(dialogServiceSpy.openMovieDetail).toHaveBeenCalled();
  });

  it('should get movies from server', () => {
    service.getMoviesFromServer();
    let req: TestRequest = httpMock.expectOne('http://localhost:3000/movies');
    req.flush(MOVIES)
    expect(service._movies).toEqual(MOVIES)
    httpMock.verify();
  });

  it('should search by parameter', () => {
    const spySetMovies = spyOn(service, "setMovies");
    service.searchByParameter("");
    expect(spySetMovies).toHaveBeenCalledWith(service._movies);
    service._movies = MOVIES;
    service.searchByParameter("2001");;
    expect(service._filtredMovies).toEqual([MOVIE])

  });

});
