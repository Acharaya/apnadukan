import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './Guardians/authguard.guard';
import { RegisterationGuard } from './Guardians/registeration.guard';
import { ShopguardGuard } from './Guardians/shopguard.guard';
const routes: Routes = [
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  // {
  //   path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full',
  // },
  {
    path: 'home',
    loadChildren: () =>
      import('./Pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'subshop',
    loadChildren: () =>
      import('./Pages/subshop/subshop.module').then((m) => m.SubshopPageModule),
    canActivate: [AuthguardGuard],
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./Pages/shop/shop.module').then((m) => m.ShopPageModule),
  },
  {
    path: 'shopid',
    loadChildren: () =>
      import('./Pages/shopid/shopid.module').then((m) => m.ShopidPageModule),
    canActivate: [AuthguardGuard],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./Pages/login/login.module').then((m) => m.LoginPageModule),
    canActivate: [RegisterationGuard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./Pages/signup/signup.module').then((m) => m.SignupPageModule),
    canActivate: [RegisterationGuard],
  },
  {
    path: 'myaccount',
    loadChildren: () =>
      import('./Pages/myaccount/myaccount.module').then(
        (m) => m.MyaccountPageModule
      ),
    canActivate: [AuthguardGuard],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./Pages/cart/cart.module').then((m) => m.CartPageModule),
    canActivate: [AuthguardGuard],
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./Pages/product/product.module').then((m) => m.ProductPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Pages/dashboard/dashboard.module').then(
        (m) => m.DashboardPageModule
      ),
    canActivate: [ShopguardGuard],
  },

  {
    path: 'productconsole',
    loadChildren: () =>
      import('./Pages/productconsole/productconsole.module').then(
        (m) => m.ProductconsolePageModule
      ),
    canActivate: [ShopguardGuard],
  },

  {
    path: 'bill-info',
    loadChildren: () =>
      import('./Pages/bill-info/bill-info.module').then(
        (m) => m.BillInfoPageModule
      ),
    canActivate: [AuthguardGuard],
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
