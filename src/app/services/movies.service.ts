import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieModel} from "../models/movie.model";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 movies!: MovieModel[];
 pageString="&page=";


  constructor(private http: HttpClient) { }

  pageNavigation(page?: number, clickType?: 'next' | 'prev' ){
    page=1; //page initializer
    clickType === 'next' ? page++ : page--;
    return "&page="+page;
  }

  getAllMovies(page:number){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${environment.apiKey}`
    };
    return this.http.get<MovieModel[]>(`${environment.apiUrl}${environment.apiKey}${this.pageString}${page}`,{headers});
  }

}
