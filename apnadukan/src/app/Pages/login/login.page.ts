import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public userdata: UserService) {}
  public UserData = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  };

  ngOnInit() {}
  login(UserData) {
    this.userdata.login(this.UserData);
  }
}
