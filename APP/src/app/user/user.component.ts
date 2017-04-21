import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  formInfo              = {
    username:           '',
    password:           '',
    name:               '',
    email:              '',
    phone:              ''
  };
  user:                 any;
  error:                string;

  constructor(
    private session: SessionService
  ) { }

  ngOnInit() {
  }
  login() {
    this.session.login(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      )
  }
  signup() {
    this.session.signup(this.formInfo)
      .subscribe(
        (user) => this.user = user,
        (err) => this.error = err
      );
  }
}
