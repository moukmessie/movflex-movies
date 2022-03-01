import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesListComponent} from "./movies-list/movies-list.component";
import {MovieComponent} from "./movie/movie.component";

const routes: Routes = [
  {path: '', component:MoviesListComponent},
  {path: 'movies', component:MovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
