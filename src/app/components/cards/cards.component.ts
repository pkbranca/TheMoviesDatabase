import { Component, OnInit, Input, Output } from '@angular/core';
import {Router} from '@angular/router'; 
import { last } from 'rxjs/operators';
import {Movie} from '../../models/movie';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() movies:Movie[]=[];  
  constructor(private router: Router) { 
   }

  ngOnInit() { 
    console.log(this.movies);
  }

  MovieDetail(movie:Movie){
    let movieId = movie.id;
    this.router.navigate(["/home/pelicula", movieId]); 
  }

  dosomething(movie:any){ 
  }
 
}
