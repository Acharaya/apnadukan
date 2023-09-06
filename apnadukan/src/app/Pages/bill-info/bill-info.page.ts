import { Component, OnInit } from '@angular/core';
import { DependencyService } from 'src/app/Services/dependency.service';

@Component({
  selector: 'app-bill-info',
  templateUrl: './bill-info.page.html',
  styleUrls: ['./bill-info.page.scss'],
})
export class BillInfoPage implements OnInit {
  private cart = {
    Payment: '',
    Ordertype: '',
  };
  constructor(private check: DependencyService) {
    this.cart.Ordertype = this.check.cart.Ordertype;
    this.cart.Payment = this.check.cart.Payment;
  }

  ngOnInit() {}
}
