import { Component, OnInit } from '@angular/core';

import { CrudService } from 'src/app/Services/crud.service';
import { DependencyService } from 'src/app/Services/dependency.service';

import { Product } from '../../shared/interfaces';

@Component({
  selector: 'app-productconsole',
  templateUrl: './productconsole.page.html',
  styleUrls: ['./productconsole.page.scss'],
})
export class ProductconsolePage implements OnInit {
  public product: Product = {
    Product_name: '',
    Product_price: 0,
    Product_quantity: '',
    Product_type: '',
    Product_description: '',
  };
  public data;
  public productdata;
  public productid: any;
  public d;
  constructor(private cruds: CrudService, private check: DependencyService) {
    // this.dt.then((res) => {
    //   console.log(res);
    // });
    // console.log(this.dt);
  }

  ngOnInit() {
    this.cruds
      .get_alldataidbase('Shops', this.check.User_id, 'Products')
      .subscribe((res) => {
        this.productdata = res;
        this.productid = this.productdata.Product_id;
      });
  }
  add(product) {
    // this.cruds.add_alldata(product);
    this.cruds.addproductcrud(
      product,
      'Shops',
      'Products',
      this.check.User_id,
      false
    );
  }

  delete(productid) {
    this.cruds.deleteproductcrud(
      'Shops',
      'Products',
      this.check.User_id,
      productid
    );
  }

  update(
    productid,
    product_name,
    product_price,
    product_type,
    product_quantity,
    product_description
  ) {
    this.cruds.Updatecrud(
      'Shops',
      'Products',
      this.check.User_id,
      productid,
      product_name,
      product_price,
      product_type,
      product_quantity,
      product_description
    );
  }
}
