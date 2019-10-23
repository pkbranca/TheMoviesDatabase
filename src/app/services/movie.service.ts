import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apikey:string ="c796198f5d5ed1b764f730a1922948f0";
  private urlMovie:string = "https://api.themoviedb.org/3";

  constructor(private http:HttpClient) { }


  getMovies(query:string){
    const url = `${this.urlMovie}${query}?api_key=${this.apikey}&language=es&sort_by=popularity.desc&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url,"");
  }

  

  getMoviesPagination(query:string,page:string){
    const url = `${this.urlMovie}${query}?api_key=${this.apikey}&page=${page}&language=es&sort_by=popularity.desc&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url,"");
  }

  getMoviesBySearchPagination(text:string, query:string,page:string){
    const url = `${this.urlMovie}${query}?api_key=${this.apikey}&query=${text}&page=${page}&language=es&sort_by=popularity.desc&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url,"");
  }

  getAllMovies(page:any){
    return this.getMoviesPagination(`/discover/movie`,page).pipe(map((data:any)=> 
      data));
  } 

  getMovieSearch(text: string, page:string) {
    return this.getMoviesBySearchPagination(
      text,`/search/movie`,page ).pipe(map((data: any) => data));
  }

  getMovie(id:string){
    return this.getMovies(`/movie/${id}`).pipe(map((data:any)=>data));
  }

   getAllVideos(id:string){
    const url = `${this.urlMovie}${id}/videos?api_key=${this.apikey}&language=en-US&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url,"");
  }

  getVideos(id:string){
    return this.getAllVideos(id).pipe(map((data:any)=>data.results));
  }
} 