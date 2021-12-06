import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from 'src/app/models/movie.interface';
import { DialogService } from 'src/app/services/dialog/dialog.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public movie: Movie, private dialogServie: DialogService) { }

  ngOnInit(): void {
  }

  close(): void {
      this.dialogServie.closeDialog();
  }
}
