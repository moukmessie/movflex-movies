import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navigation-button',
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
page!:number;
//id!: number;
  @Input() pageNumber: any;
  constructor(private moviesService : MoviesService, private router : Router) {
    // this.moviesService.page=1;
  }
// nextButton(){
//     this.moviesService.PageNavigation(this.page,"next");
// }
// prevButton(){
//     console.log(this.moviesService.PageNavigation(this.page,"prev"));
//
// }

  nextButton(){
   this.pageNumber++;
    console.log(this.pageNumber);
    this.router.navigateByUrl('/' + this.pageNumber);
    //window.location.reload();

  }

  ngOnInit(): void {
    this.page=1;

    console.log(this.pageNumber)
  }



}
