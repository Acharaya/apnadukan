import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductconsolePageRoutingModule } from './productconsole-routing.module';

import { ProductconsolePage } from './productconsole.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductconsolePageRoutingModule
  ],
  declarations: [ProductconsolePage]
})
export class ProductconsolePageModule {}
