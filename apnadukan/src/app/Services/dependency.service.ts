import { Injectable } from '@angular/core';

import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  DocumentReference,
  setDoc,
  getDoc,
  query,
  docSnapshots,
} from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrudService } from './crud.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class DependencyService {
  public isUserLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public User_id: any;
  public isLogged: any;
  public isShop: boolean;
  public refreshdata$ = new BehaviorSubject<boolean>(true);
  public cart = {
    Payment: '',
    Ordertype: '',
  };
  constructor(
    private db: Firestore,
    private cruds: CrudService,
    private user: UserService
  ) {
    this.User_id = localStorage.getItem('User_id');
    this.user.IsLogged().subscribe((res) => {
      this.isLogged = res;

      if (this.isLogged) {
        this.cruds.getSingleData(this.User_id).then((res) => {
          this.isShop = res.isShop;

          localStorage.setItem('isShop', res.isShop);
        });
      }
    });

    if (localStorage.getItem('User_id') != 'NULL') {
      this.isUserLogged.next(true);
    } else {
      this.isUserLogged.next(false);
    }
  }

  createBill(ordertype, payment) {
    this.cart.Ordertype = ordertype;
    this.cart.Payment = payment;
  }
}
