import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FeaturedServiceService {

  BASE_URL: string      = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  featuredNew(item) {
    /*
    const options = { withCredentials: true };
    return this.myHttp.get(`${this.BASE_URL}/api/newlisting`, item, options)
      .toPromise()
      .then(apiResponse => apiResponse.json())
      .catch((err) => {
        console.log('Error creating a New Listing', err);
    })
    /*
  }

  featuredList() {

  }

  featuredEdit() {

  }

  featuredDelete() {

  }


}
