import { Injectable } from '@angular/core';
import { getAuth } from 'firebase/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StatchangeService } from '../Services/statchange.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardGuard implements CanActivate {
  private isLogged: any;
  constructor(private state: StatchangeService) {
    this.state.stateDetect().subscribe((res) => {
      this.isLogged = res;
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
    const auth = getAuth();
    const user = auth.currentUser;
    if (this.isLogged) {
      return true;
    } else {
      return false;
    }
  }
}
