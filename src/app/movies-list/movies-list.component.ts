import { Component } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent  {
  allMovies!: MovieModel[];
   constructor(private moviesServices : MoviesService){
     this.moviesServices.getAllMovies().subscribe(data=>{
       console.warn(data);
       // @ts-ignore
       this.allMovies=data.results ;
     })
   }

}
