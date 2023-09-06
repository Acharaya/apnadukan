import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopidPage } from './shopid.page';

const routes: Routes = [
  {
    path: '',
    component: ShopidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopidPageRoutingModule {}
