import {Component, Input, OnInit} from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { MoviesService } from '../services/movies.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit{
  allMovies!: MovieModel[];
  pageString !: number;
  page : number=1;
 totalPage!: number;
  totalResults!: number;
  pageSize!: number;

   constructor(private moviesServices : MoviesService, private router : ActivatedRoute){}
 ngOnInit() {
     //this.page = +this.router.snapshot.params['id'];

   this.moviesServices.getAllMovies(this.page).subscribe(data=>{
     // @ts-ignore
     console.warn(data.total_results);
     // @ts-ignore
     this.allMovies=data.results;
     // @ts-ignore
     this.totalResults=data.total_results;
   }, error => {
     console.log(error);
   })

   console.log(this.page)
 }
 handlePageChange(event: number){
     this.page= event;
     console.log(this.page)
     this.ngOnInit();
 }
}
