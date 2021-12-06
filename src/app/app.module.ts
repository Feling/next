import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MovieContainerComponent } from './components/movie-container/movie-container.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MovieTextPipe } from './pipes/movie-text.pipe';
import { EncodeInnerHtmlDirective } from './directives/encode-inner-html.directive';
import { SearchMoviesComponent } from './components/movies-search/movies-search.component';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieContainerComponent,
    FooterComponent,
    MovieCardComponent,
    MovieDetailsComponent,
    MovieTextPipe,
    EncodeInnerHtmlDirective,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
