import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  private Product: Product = {
    Product_description: '',
    Product_price: 0,
    Product_name: '',
    Product_quantity: '',
    Product_type: '',
  };
  private productdata: any;
  constructor(private route: Router) {}

  ngOnInit() {
    this.productdata = this.route.getCurrentNavigation().extras.state;
    this.Product.Product_name = this.productdata.Product_name;
    this.Product.Product_price = this.productdata.Product_price;
    this.Product.Product_quantity = this.productdata.Product_quantity;
    this.Product.Product_description = this.productdata.Product_description;
    this.Product.Product_type = this.productdata.Product_type;
  }
}
