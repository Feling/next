import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../../components/movie-details/movie-details.component';
import { Movie } from '../../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialogMatService: MatDialog) { }

  openMovieDetail(movieDetails: Movie) {
    this.dialogMatService.open(MovieDetailsComponent, {
      width: '1360px',
      height: '690px',
      data: movieDetails,
      backdropClass: 'backdropBackground'
    });
  }

  closeDialog(): void {
    this.dialogMatService.closeAll();
  }
}
