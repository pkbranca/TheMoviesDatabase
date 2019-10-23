import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { CardsComponent } from '../cards/cards.component';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class  MoviesComponent implements OnInit, OnDestroy {

  faSearch = faSearch; 
  movies: Movie[] = []; 
  subscr: any[] = [];
  moviestoshow: any[] = [];
  page: any = 0;
  total_pages: any = 1;
  notscrolly: boolean = true;
  text_search: string = ""; 

  constructor(private movieService: MovieService, private spinner: NgxSpinnerService) {

  }

  ngOnInit() {  
    this.loadNextMovies();
  } 

  ngOnDestroy(){
    
  }


  initValues(): void {
    this.page = 0;
    this.total_pages = 1;
    this.movies = []; 
  }

  search():void{

    this.initValues();
    //Obtener las peliculas cuando haya un cambio de texto
    if (this.text_search != "") {
      const moviesObservable = new Observable(observer => {
        this.spinner.show();
        setTimeout(() => {
          this.loadNextMoviesBySearch(this.text_search);
        }, 1000);
        observer.complete();
      }).toPromise();

      moviesObservable.then(() => {
        this.notscrolly = true;
      }); 
      
    } else {
      this.loadNextMovies();
    }
  }

  scrollSearchMovies():void{
    if (this.text_search != "") {
      const moviesObservable = new Observable(observer => {
        this.spinner.show();
        setTimeout(() => {
          this.loadNextMoviesBySearch(this.text_search);
        }, 1000);
        observer.complete();
      }).toPromise();

      moviesObservable.then(() => {
        this.notscrolly = true;
      });
    }
    else {
      this.initValues();
    }
  }
 
 
  loadNextMoviesBySearch(text: string) {

    if (this.page + 1 <= this.total_pages) {
      this.page = this.page + 1;
      this.movieService.getMovieSearch(text, this.page).subscribe((data: any) => {

        this.total_pages = data.total_pages;
        this.subscr = data.results;  
        this.page = data.page;   
       this.movies.concat(data.results);

      });
       /*this.subscr.forEach((movie, index) => {          
        this.movies.push(movie);          
       }); */
    }
    else {
      this.spinner.hide();
    }
  } 

  getNextMovies(): void {
    const moviesObservable = new Observable(observer => {
      this.spinner.show();
      setTimeout(() => {
        this.loadNextMovies();
      },1000);
      observer.complete();
    }).toPromise();

    moviesObservable.then(() => {
     // this.notscrolly = true;
    });
  }


  loadNextMovies() {
    if (this.page + 1 <= this.total_pages) {
      this.page = this.page + 1; 
      this.movieService.getAllMovies(this.page).subscribe((data: any) => { 
        this.total_pages = data.total_pages; /* 
        data.results.forEach((movie, index) => {          
            this.movies.push(movie);          
        });*/
        
        this.subscr = data.results;
        //this.moviestoshow = this.moviestoshow.concat(this.subscr);
        //this.movies = this.movies.concat(data.results);
        this.subscr.forEach((movie, index) => {          
          this.movies.push(movie);
            
         }); 
         console.log(this.movies);
        this.notscrolly =true;
        this.page = data.page;  
      });
    }
    else {
      this.spinner.hide();
    }
  }


  //Obtener más películas cada vez que haga scroll
  onScroll() { 
    console.log("scroll");
    if (this.notscrolly) {
      this.notscrolly = false;
      console.log("notscrolly true");
      if (this.text_search == "") {
        this.getNextMovies();
      }
      else {
        this.scrollSearchMovies();
      }
    }else{
      console.log("notscrolly false");
    }
  }

}
