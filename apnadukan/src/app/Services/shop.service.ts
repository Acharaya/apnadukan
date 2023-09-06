import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor() {}

  getShopDetails() {
    return [
      {
        shop_id: 'A3452',
        shop_name: 'shop1',
        shop_subcount: 123,
        shop_image_url: 'assets/shop1',
        shop_style: function () {
          let heartstyle;
          heartstyle = {
            color: 'red',
          };
          return heartstyle;
        },
      },
      {
        shop_id: 'A3452',
        shop_name: 'shop2',
        shop_subcount: 123,
        shop_image_url: 'assets/shop1',
        shop_style: function () {
          let heartstyle;
          heartstyle = {
            color: 'red',
          };
          return heartstyle;
        },
      },
      {
        shop_id: 'A3452',
        shop_name: 'shop3',
        shop_subcount: 123,
        shop_image_url: 'assets/shop1',
        shop_style: function () {
          let heartstyle;
          heartstyle = {
            color: 'red',
          };
          return heartstyle;
        },
      },
      {
        shop_id: 'A3452',
        shop_name: 'shop4',
        shop_subcount: 123,
        shop_image_url: 'assets/shop1',
        shop_style: function () {
          let heartstyle;
          heartstyle = {
            color: 'red',
          };
          return heartstyle;
        },
      },
    ];
  }
}
