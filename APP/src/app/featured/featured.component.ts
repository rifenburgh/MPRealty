import { Component, OnInit } from '@angular/core';
import { FeaturedServiceService } from '../services/featured-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})

export class FeaturedComponent implements OnInit {
  person: Object        = {};
  // items: Array<any>     = [];
  items:                Object;
  errorMessage:         String;


  constructor(
    private myFeature:  FeaturedServiceService,
    private myRoute:    ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log("Loading Featured");
    // this.mySession.isLoggedIn()
    //   .subscribe((user) => {
    //   this.person = user.json();
    // this.myFeatured.featuredList()
    //   .then((featuredHomes) => { this.items = featuredHomes })
    // })

    this.myFeature.featuredList()
      .then((item) => {
        this.items = item;
        console.log(item);
    });

  }
  deleteFeature(id) {
    this.myFeature.featuredDelete(id)
      .then((apiResponse) => {});
  }
  addImage(id, img){
    this.myFeature.addImage(id, img)
      .then((apiResponse) => {});
  }

}
