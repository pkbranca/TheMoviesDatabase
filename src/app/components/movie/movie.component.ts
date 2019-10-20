import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieService} from '../../services/movie.service'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Movie } from 'src/app/models/movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: any = {};
  video:any = {};
  backgroundUrl="";
  faStar = faStar;
  baseImageUrl = `https://image.tmdb.org/t/p/w500`
  private imageUrl:string = "";

  constructor(private router: ActivatedRoute,
    private movieService: MovieService) { 
      
      this.router.params.subscribe(params => { 
  
        this.movieService.getMovie(params['id'])
          .subscribe(movie => { 
            this.movie = movie;
               
            if(this.movie.backdrop_path != null){
            this.imageUrl = `${this.baseImageUrl}${this.movie.backdrop_path}`;
            }
            else if(this.movie.poster_path != null){
              this.imageUrl = `${this.baseImageUrl}${this.movie.poster_path}`;
            }
            else{
              this.imageUrl = `assets/img/default-background.jpg`;
            }
          });
          
        this.movieService.getVideos(params['id'])
        .subscribe(videos=>{
          if(videos[0] != undefined){
          this.video = videos[0]; 
          }
        });
        
      });

     }

  ngOnInit() {
  }

}
