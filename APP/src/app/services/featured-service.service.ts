import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class FeaturedServiceService {

  BASE_URL: string      = 'http://localhost:3000';

  constructor(private myHttp: Http) { }

  featuredNew(item) {

    const options = { withCredentials: true };
    return this.myHttp.post(`${this.BASE_URL}/api/newlisting`, item, options)
      .toPromise()
      .then(apiResponse => apiResponse.json())
      .catch((err) => {
        console.log('Error creating a New Listing', err);
    })

  }

  featuredList() {
    return this.myHttp.get(`${this.BASE_URL}/api/listing`)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

  featuredEdit() {

  }

  featuredDelete(id) {
    //This API Route needs to be developered
    return this.myHttp.get(`${this.BASE_URL}/api/featureddelete/${id}`)
      .toPromise()
      .then(apiResponse => {
        return apiResponse.json();
      });
  }
  addImage(id, img) {
    return this.myHttp.post(`${this.BASE_URL}/api/addimage/${id}`, img)
      .toPromise()
      .then(apiResponse => {
        return apiResponse.json();
      })
  }


}
