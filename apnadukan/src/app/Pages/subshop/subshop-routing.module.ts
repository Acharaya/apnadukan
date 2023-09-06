import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubshopPage } from './subshop.page';

const routes: Routes = [
  {
    path: '',
    component: SubshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubshopPageRoutingModule {}
