
export class Movie {
    //field  
    id: string;
    backdrop_path: string;
    original_title: string;
    poster_path:string; 
    genres:any[]=[];

    //constructor 
    constructor() {
        this.id = "";
        this.backdrop_path = "";
        this.original_title = "";
        this.genres = [];
    }

    //function 
    disp(): void {

    }
}

