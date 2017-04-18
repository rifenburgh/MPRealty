import { Component, OnInit } from '@angular/core';
import { ScheduleServiceService } from '../services/schedule-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent implements OnInit {
  items: Object         = {};
  person: Object        = {};
  formInfo              = {
    name:               '',
    phone:              '',
    email:              '',
    message:            '',
    besttime:           '',
    timeline:           ''
  };

  constructor(
    private mySchedule: ScheduleServiceService
  ) { }

  ngOnInit() {
    // this.mySchedule.scheduleList()
    //   .then((item) => {
    //     this.items = item;
    //     console.log(this.items);
    //   });
  }
  scheduleNew(thing) {
    console.log("Starting scheduleNew()", this.formInfo);
    this.mySchedule.scheduleNew(this.formInfo)
      .then((apiResponse) => {
      });
  }

}
