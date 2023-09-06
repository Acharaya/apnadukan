import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { DependencyService } from './Services/dependency.service';
import { StatchangeService } from './Services/statchange.service';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  private isLogged: boolean;
  public userdata: {
    first_name: string;
    last_name: string;
    email: string;
  };

  private first_name;
  private last_name;
  private email;

  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'login', url: '/login', icon: 'log-in' },
    { title: 'signup', url: '/signup', icon: 'laptop' },
  ];
  constructor(
    private user: UserService,
    private change: ChangeDetectorRef,
    private state: StatchangeService,
    private check: DependencyService,
    private router: Router
  ) {
    this.user.getUserDetails();
  }

  ngOnInit(): void {
    if (localStorage.getItem('User_id')) {
      console.log('contains');
    } else {
      window.location.reload();
      localStorage.setItem('isLogged', '');
      localStorage.setItem('User_id', 'NULL');

      localStorage.setItem('First_name', 'NULL');

      localStorage.setItem('Last_name', 'NULL');

      localStorage.setItem('Email', 'NULL');
    }

    this.check;
    this.check.isUserLogged.subscribe((res) => {
      this.isLogged = res;
    });
    if (this.isLogged) {
      this.first_name = localStorage.getItem('First_name');
      this.last_name = localStorage.getItem('Last_name');
      this.email = localStorage.getItem('email');
      this.appPages = [
        { title: 'home', url: '/home', icon: 'home' },
        // { title: 'shop', url: '/shop', icon: 'archive' },
        { title: 'subshop', url: '/subshop', icon: 'heart' },
        // { title: 'login', url: '/login', icon: 'log-in' },
        // { title: 'signup', url: '/signup', icon: 'laptop' },
        { title: 'Dashboard', url: '/dashboard', icon: 'id-card' },
        // { title: 'product', url: '/product', icon: 'folder-open' },
        { title: 'cart', url: '/cart', icon: 'folder-open' },
        { title: 'My Account', url: '/myaccount', icon: 'id-card' },
        { title: 'Add products', url: '/productconsole', icon: 'folder-open' },
      ];
    }
  }

  signout() {
    this.user.Signout();
  }
}
