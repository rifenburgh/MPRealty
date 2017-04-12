import { Component, OnInit } from '@angular/core';
import { FeaturedServiceService } from '../services/featured-service.service';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  person: Object = {};
  items: Array<any> = [];

  constructor(private myFeatured: FeaturedServiceService) { }

  ngOnInit() {
    // this.mySession.isLoggedIn()
    //   .subscribe((user) => {
    //   this.person = user.json();
    // this.myFeatured.featuredList()
    //   .then((featuredHomes) => { this.items = featuredHomes })
    // })
  }

}
