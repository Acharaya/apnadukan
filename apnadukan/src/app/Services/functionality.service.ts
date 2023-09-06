import { Injectable, Output } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Observable, Subscriber } from 'rxjs';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root',
})
export class FunctionalityService {
  public shopdata: any;
  private shotstatus: any;
  constructor(
    public alert: AlertController,
    private router: Router,
    public cruds: CrudService
  ) {}

  ngOnInit() {
    this.cruds.get_alldata().subscribe((res) => {
      this.shopdata = res;
    });
  }
  async showAlert(status, headerdata) {
    const Alert = await this.alert.create({
      subHeader: headerdata,
      message: status,
    });

    await Alert.present();
  }

  async showAlert2(status, headerdata) {
    const Alert = await this.alert.create({
      subHeader: headerdata,
      message: status,
      buttons: [
        {
          text: 'Disagree',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Agree',

          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            this.cruds.setSingledata(
              'true',
              'Users',
              localStorage.getItem('User_id')
            );
            this.router.navigate(['/productconsole']);
          },
        },
      ],
    });

    await Alert.present();
  }

  search(searchterm) {
    const data = new Observable((subscriber) => {
      this.cruds.get_alldata().subscribe((res) => {
        res.filter((shop) => {
          if (searchterm == shop.Shop_name) {
            subscriber.next(shop.Shop_name);
          } else {
            let data = ['No such shop exits'];
            subscriber.next(data);
          }
        });
        // for (var i = 0; i < filtered.length; i++) {
        //   filtered[i].Shop_name;
        // }
        // console.log(res);
      });
    });
    return data;
  }

  // loog() {
  //   const foo = new Observable((subscriber) => {
  //     for (var i = 0; i < 5; i++) {
  //       subscriber.next(i);
  //     }
  //   });
  //   return foo;
  // }

  subscribeShop(shopid) {}
}
