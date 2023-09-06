export interface User {
  email: string;
  first_name: string;
  last_name: string;
  password: any;
  User_id: any;
}

export interface User2 {
  email: string;
  first_name: string;
  last_name: string;
  password: any;
  User_id: any;
  isShop: boolean;
}

export interface Product {
  Product_name: string;
  Product_price: number;
  Product_type: string;
  Product_quantity: string;
  Product_description: string;
}

export interface Shop {
  Shop_id: string;
  Shop_email: string;
  Shop_number: number;
  Shop_name: string;
  Shop_type: string;
  Shop_location: string;
  Shop_description: string;
}
