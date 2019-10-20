import { Routes } from "@angular/router";
import { MoviesComponent } from "./components/movies/movies.component";
import { MovieComponent } from "./components/movie/movie.component";

export const ROUTES: Routes = [
  { path: "home", component: MoviesComponent }, 
  { path: "home/pelicula/:id", component: MovieComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
