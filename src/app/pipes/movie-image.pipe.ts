import { Pipe, PipeTransform } from '@angular/core'; 

@Pipe({
  name: 'movieImage'
})
export class MovieImagePipe implements PipeTransform {

  private url:string = `https://image.tmdb.org/t/p/w500`;

  transform(movie: any, ...arg: any): any {
    if(movie.poster_path){
      return `${this.url}${movie.poster_path}`; 
    }else{
      if(movie.backdrop_path){
        return `${this.url}${movie.backdrop_path}`;
      }
      else{
        return `assets/img/default-poster.jpg`;
      }
    } 
  }

}
