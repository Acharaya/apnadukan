import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductconsolePage } from './productconsole.page';

const routes: Routes = [
  {
    path: '',
    component: ProductconsolePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductconsolePageRoutingModule {}
