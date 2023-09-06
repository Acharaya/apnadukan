import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatchangeService {
  private isLogged: boolean;
  constructor() {
    this.isLogged = false;
  }

  stateDetect() {
    const ob = new Observable((observer) => {
      if (localStorage.getItem('User_id') != 'NULL') {
        this.isLogged = true;
        observer.next(this.isLogged);
      } else {
        this.isLogged = false;
        observer.next(this.isLogged);
        observer.unsubscribe();
      }
    });
    return ob;
  }
}
