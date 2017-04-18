import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ScheduleServiceService {
  BASE_URL: string      = 'http://localhost:3000';

  constructor(
    private myHttp: Http
  ) { }

  scheduleList() {
    return this.myHttp.get(`${this.BASE_URL}/api/schedulelist`)
      .toPromise()
      .then(apiResponse => apiResponse.json())

  }
  scheduleNew(item) {
    const options       = { withCredentials: true };
    // console.log("scheduleNew Service ", item);
    return this.myHttp.post(`${this.BASE_URL}/api/schedulenew`, item)
      .toPromise()
      .then(apiResponse => apiResponse.json())
  }

}
