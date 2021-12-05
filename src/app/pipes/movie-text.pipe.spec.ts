import { MovieTextPipe } from './movie-text.pipe';

describe('MovieTextPipe', () => {
  it('create an instance', () => {
    const pipe = new MovieTextPipe();
    expect(pipe).toBeTruthy();
  });
});
