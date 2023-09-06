import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/Services/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  public productdata: any;
  public d: any;
  public filterterm: string;
  private shopid: any;
  private previousShopid: any;
  constructor(
    private cruds: CrudService,

    private route: Router
  ) {
    this.shopid = this.route.getCurrentNavigation().extras.state;
    if (localStorage.getItem('Selected shop') != 'NULL') {
      this.previousShopid = this.shopid;
    }
    localStorage.setItem('Selected shop', this.shopid);
    this.cruds
      .get_alldataidbase('Shops', this.previousShopid, 'Products')
      .subscribe((res) => {
        this.productdata = res;
      });

    // this.cruds
    //   .get_idbaseddata(localStorage.getItem('Selected shop'))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    // console.log(this.shopid);
  }

  ngOnInit() {
    // this.productdata = this.fetchprodctdata.getProdcutDetails();
    // this.cruds.productdata.subscribe((res) => {
    //   console.log(res);
    // });
    // this.cruds.pd.subscribe((res) => {
    //   console.log(res);
    // });
  }
}
