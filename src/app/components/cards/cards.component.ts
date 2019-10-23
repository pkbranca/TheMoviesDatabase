import { Component,AfterViewInit, OnInit, Input, Output,OnChanges, ChangeDetectionStrategy } from '@angular/core';
import {Router} from '@angular/router'; 
import { last } from 'rxjs/operators';
import {Movie} from '../../models/movie';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'], 
})
export class CardsComponent implements AfterViewInit {

  @Input() movies:Movie[]=[];  
  moviesDisplay:any[]=[];
  constructor(private router: Router) { 
    console.log("movies loaded");
    console.log(this.movies);
  }

  ngAfterViewInit() {     
    
  }
 
  MovieDetail(movie:Movie){
    let movieId = movie.id;
    this.router.navigate(["/home/pelicula", movieId]); 
  }
 
  trackByFn(index, item) {
    return item.id; // or item.id
  }
}
