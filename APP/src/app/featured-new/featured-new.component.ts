import { Component, OnInit } from '@angular/core';
import { FeaturedServiceService } from '../services/featured-service.service';

@Component({
  selector: 'app-featured-new',
  templateUrl: './featured-new.component.html',
  styleUrls: ['./featured-new.component.css']
})

export class FeaturedNewComponent implements OnInit {

  formInfo              = {
    area:                 '',
    price:                '',
    street_address:       '',
    city:                 '',
    state:                '',
    zip:                  '',
    style:                '',
    age:                  '',
    age_desc:             '',
    bedrooms:             '',
    bathrooms:            '',
    water:                '',
    heat:                 '',
    assessment:           '',
    acreage:              '',
    mls:                  '',
    sqft:                 '',
    photos:               '',
    virtual_tour:         '',
    end_listing:          ''
  };
  constructor(
    private myFeature: FeaturedServiceService
  ) { }

  ngOnInit() {
  }

  featuredNew(item) {
    this.myFeature.featuredNew(this.formInfo)
      .then((apiResponse) => {});
  }
}
