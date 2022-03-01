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

  constructor(private http: HttpClient) { }

  getAllMovies(){
    const headers = {
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${environment.apiKey}`
    };
   //
   //  this.http.get<MovieModel>(`${environment.apiUrl}${environment.apiKey}`,{headers})
   //    .subscribe(data =>{
   //      //console.log(data);
   //      return data;
   //    }, error => {
   //      console.error(error);
   //    })
   // // return this.movies;
     // @ts-ignore
    return this.http.get<MovieModel[]>(`${environment.apiUrl}${environment.apiKey}`,{headers});


  }
}
