import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { SpinLoaderComponent } from './spin-loader/spin-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesListComponent,
    HeaderComponent,
    SpinLoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
