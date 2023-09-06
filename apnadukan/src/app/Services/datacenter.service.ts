import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces';
// import {
//   AngularFireDatabase,
//   AngularFireList,
//   AngularFireObject,
// } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class DatacenterService {
  // productsRef: AngularFireList<any>;
  // productRef: AngularFireObject<any>;
  // constructor(private db: AngularFireDatabase) {}
  // //create a product
  // Addproduct(product: Product) {
  //   this.productsRef.push({
  //     productName: product.productName,
  //     productPrice: product.productPrice,
  //     productQuantity: product.productQuantity,
  //   });
  // }
  // //fetch product list
  // GetProductList() {
  //   this.productsRef = this.db.list('product-list');
  //   return this.productsRef;
  // }
  // //Update product
  // UpdateProduct(product: Product) {
  //   this.productRef.update({
  //     productName: product.productName,
  //     productPrice: product.productPrice,
  //     productQuantity: product.productQuantity,
  //   });
  // }
  // //delete product
  // DeleteProduct(id: string) {
  //   this.productRef = this.db.object('products-list/' + id);
  //   this.productRef.remove();
  // }
}
