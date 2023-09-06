import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CrudService } from '../Services/crud.service';

@Injectable({
  providedIn: 'root',
})
export class ShopguardGuard implements CanActivate {
  public isShop: boolean;
  constructor(private cruds: CrudService) {
    this.cruds.getSingleData(localStorage.getItem('User_id')).then((res) => {
      this.isShop = res.isShop;
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.isShop) {
      return true;
    } else {
      return false;
    }
  }
}
