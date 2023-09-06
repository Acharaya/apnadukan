import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProdcutDetails() {
    return [
      {
        product_id: 'A3452',
        product_name: 'product1',
        product_price: '10000$',
        product_rating: 5,
        product_category: 'category1',
        shop_image_url: 'assets/shop1',
      },
      {
        product_id: 'A3452',
        product_name: 'product2',
        product_price: '10000$',
        product_rating: 5,
        product_category: 'category1',
        shop_image_url: 'assets/shop1',
      },
      {
        product_id: 'A3452',
        product_name: 'product3',
        product_price: '10000$',
        product_rating: 5,
        product_category: 'category1',
        shop_image_url: 'assets/shop1',
      },
      {
        product_id: 'A3452',
        product_name: 'product4',
        product_price: '10000$',
        product_rating: 5,
        product_category: 'category1',
        shop_image_url: 'assets/shop1',
      },
    ];
  }
}
