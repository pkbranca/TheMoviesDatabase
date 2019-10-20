import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieBackground'
})
export class MovieBackgroundPipe implements PipeTransform {

  private url:string = "https://image.tmdb.org/t/p/w500";

  transform(movie: any, ...arg: any): any {
    
      if(movie.backdrop_path){
        return this.url+movie.backdrop_path;
      }
      else{
        return this.url;
      }
    } 

}
