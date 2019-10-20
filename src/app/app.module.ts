import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http'
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner'
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";


import { MoviesComponent } from './components/movies/movies.component';
import { CardsComponent } from './components/cards/cards.component';
import { MovieImagePipe } from './pipes/movie-image.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { MovieBackgroundPipe } from './pipes/movie-background.pipe';
import { ProductionCompanyPipe } from './pipes/production-company.pipe'; 

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CardsComponent,
    MovieImagePipe,
    MovieComponent,
    MovieBackgroundPipe,
    ProductionCompanyPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
