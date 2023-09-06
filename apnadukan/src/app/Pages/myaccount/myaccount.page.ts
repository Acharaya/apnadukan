import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { FunctionalityService } from 'src/app/Services/functionality.service';

import { Shop } from '../../shared/interfaces';
import { DependencyService } from 'src/app/Services/dependency.service';
import { CrudService } from 'src/app/Services/crud.service';
import { User } from '../../shared/interfaces';
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  public shop: Shop = {
    Shop_id: '',
    Shop_email: '',
    Shop_number: +91,
    Shop_name: '',
    Shop_type: '',
    Shop_location: '',
    Shop_description: '',
  };

  private userdata: User = {
    User_id: '',
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  };

  private userd: any;
  private isShop: any;

  constructor(
    private user: UserService,
    private functions: FunctionalityService,
    private check: DependencyService,
    private cruds: CrudService
  ) {
    this.shop.Shop_id = this.check.User_id;
    this.isShop = localStorage.getItem('isShop');

    this.cruds.getSingleData(this.check.User_id).then((res) => {
      this.userdata.email = res.email;
      this.userdata.first_name = res.first_name;
      this.userdata.last_name = res.last_name;
      this.userdata.User_id = res.User_id;
    });
  }

  termsAndConditions() {}
  add(shop) {
    this.cruds.setmultipledata(shop, 'Shops', shop.Shop_id, true);
    this.functions.showAlert2('Terms and Conditions', 'Do  you agree');
  }
  signout() {
    this.user.Signout();
  }
  ngOnInit(): void {}
}
