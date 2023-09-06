import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  getAuth,
  createUserWithEmailAndPassword,
  EmailAuthCredential,
} from 'firebase/auth';
import { User2 } from 'src/app/shared/interfaces';
import { CrudService } from 'src/app/Services/crud.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor(public userdata: UserService, private cruds: CrudService) {}

  // public UserData = {
  //   email: '',
  //   password: '',
  //   first_name: '',
  //   last_name: '',
  // };

  private UserData: User2 = {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    User_id: '',
    isShop: false,
  };
  ngOnInit() {}

  register() {
    this.userdata.register(this.UserData);
  }
}
