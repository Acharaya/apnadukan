import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DependencyService } from 'src/app/Services/dependency.service';
import { Product } from 'src/app/shared/interfaces';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  private product: any;
  private Product: Product = {
    Product_description: '',
    Product_price: 0,
    Product_name: '',
    Product_quantity: '',
    Product_type: '',
  };

  private cart = {
    Payment: '',
    Ordertype: '',
  };
  private productdata: any;
  constructor(private route: Router, private check: DependencyService) {}

  ngOnInit() {
    // this.productdata = this.route.getCurrentNavigation().extras.state;
    // // this.Product.Product_name = this.productdata.Product_name;
    // // this.Product.Product_price = this.productdata.Product_price;
    // // this.Product.Product_quantity = this.productdata.Product_quantity;
    // // this.Product.Product_description = this.productdata.Product_description;
    // // this.Product.Product_type = this.productdata.Product_type;
    // console.log(this.productdata);
  }

  cartStatus() {
    this.check.createBill(this.cart.Ordertype, this.cart.Payment);
  }
}
