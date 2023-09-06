import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { async } from '@firebase/util';
import { CrudService } from 'src/app/Services/crud.service';
import { FunctionalityService } from 'src/app/Services/functionality.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public shopdata: any;
  public shopstyle: any;

  public filterterm: string;
  public filter;
  public shopidfromview;
  public ch: boolean;

  constructor(
    private authentication: UserService,
    private cruds: CrudService,
    private functions: FunctionalityService,
    private user: UserService
  ) {
    this.cruds.get_productdata();
    this.authentication.getUserDetails();
  }

  ngOnInit() {
    this.cruds.get_alldata().subscribe((res) => {
      this.shopdata = res;
    });
  }

  subfunction() {
    // this.cruds.setSingledata()
  }

  search(filterterm) {
    this.functions.search(filterterm).subscribe((res) => {
      console.log(res);
      this.filter = res;
    });
  }

  favorite() {
    if (this.ch) {
      this.ch = false;
    } else {
      this.ch = true;
    }
  }
}
