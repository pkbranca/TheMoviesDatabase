
export interface Movie {
    //field  
    id: string;

    backdrop_path: string;
    adult: boolean;
    genre_ids: any[];
    original_language:string; 
    original_title: string;
    overview:string;
    popularity: number;
    poster_path:string; 
    release_date:string;
    title:string;
    video:boolean;
    vote_average: number;
    vote_count: number; 

     
    /*
    adult: false
backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg"
genre_ids: (3) [80, 18, 53]
id: 475557
original_language: "en"
original_title: "Joker"
overview: "Arthur Fleck es un hombre ignorado por la sociedad, cuya motivación en la vida es hacer reír. Pero una serie de trágicos acontecimientos le llevarán a ver el mundo de otra forma. Película basada en Joker, el popular personaje de DC Comics y archivillano de Batman, pero que en este film toma un cariz más realista y oscuro."
popularity: 462.91
poster_path: "/v0eQLbzT6sWelfApuYsEkYpzufl.jpg"
release_date: "2019-10-04"
title: "Joker"
video: false
vote_average: 8.6
vote_count: 3775
*/

    
}

