import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/models/movie.interface';

import { MovieCardComponent } from './movie-card.component';


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

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should movieDetailsClicke', () => {
    let spyOnEmit = spyOn(component.movieDetailsSelect,  "emit");
    component.movieDetailsClicke(MOVIE)
    expect(spyOnEmit).toHaveBeenCalledWith(MOVIE);
  });
});
