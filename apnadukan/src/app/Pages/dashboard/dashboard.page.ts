import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { DependencyService } from 'src/app/Services/dependency.service';
import { Shop } from 'src/app/shared/interfaces';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  private shopdata: Shop = {
    Shop_id: '',
    Shop_email: '',
    Shop_number: +91,
    Shop_name: '',
    Shop_type: '',
    Shop_location: '',
    Shop_description: '',
  };
  private isShop: any;
  constructor(private cruds: CrudService, private check: DependencyService) {}

  ngOnInit() {
    this.isShop = localStorage.getItem('isShop');
    if (this.isShop == 'true') {
      this.cruds.getSingleShopData(this.check.User_id).then((res) => {
        this.shopdata.Shop_name = res.Shop_name;
        this.shopdata.Shop_id = res.Shop_id;
        this.shopdata.Shop_type = res.Shop_type;
        this.shopdata.Shop_description = res.Shop_description;
        this.shopdata.Shop_location = res.Shop_location;
        this.shopdata.Shop_email = res.Shop_email;
        this.shopdata.Shop_number = res.Shop_number;
      });
    }
  }
}
