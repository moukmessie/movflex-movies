import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieModel} from "../models/movie.model";
import {API_KEY} from "../../../.config";


@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 movies!: MovieModel[];
 pageString="&page=";

  constructor(private http: HttpClient) { }

  getAllMovies(page:number){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${API_KEY.theMovieKey}`
    };
    return this.http.get<MovieModel[]>(`${environment.apiUrl}&api_key=${API_KEY.theMovieKey}${this.pageString}${page}`,{headers});
  }
}
