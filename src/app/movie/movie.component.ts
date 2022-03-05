import {Component,  OnInit,Input} from '@angular/core';
import {MovieModel} from "../models/movie.model";
import {MoviesService} from "../services/movies.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
@Input() movieModel!: MovieModel[];
red!: boolean;
green!: boolean;
orange!: boolean;
  constructor(private moviesService : MoviesService, private router: Router) { }

  ngOnInit(): void {
    this.green=false;
    this.red=false;
    this.orange=false;
  }
  voteColor(vote: number){
    if(vote >= 8) {
      this.green = true;
    } else if(vote >= 5) {
      this.orange=true;
    } else {
      this.red=true;
    }
  }

}
