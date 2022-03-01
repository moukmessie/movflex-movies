import {Component,  OnInit,Input} from '@angular/core';
import {MovieModel} from "../models/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
@Input() movieModel!: MovieModel[];
  constructor() { }
  ngOnInit(): void {
    // console.warn(this.movieModel);
  }

}
