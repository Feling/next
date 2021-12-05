import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';
import { Movie } from '../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private opendDialogs: MatDialogRef<any>[] = [];
  constructor(private dialogMatService: MatDialog) { }

  openMovieDetail(movieDetails: Movie) {
   this.opendDialogs.push(this.dialogMatService.open(MovieDetailsComponent, {
    width: '1360px',
    height: '690px',
    data: movieDetails,
    backdropClass: 'backdropBackground'
   }));
  }
}
