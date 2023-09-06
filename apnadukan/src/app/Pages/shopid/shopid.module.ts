import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopidPageRoutingModule } from './shopid-routing.module';

import { ShopidPage } from './shopid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopidPageRoutingModule
  ],
  declarations: [ShopidPage]
})
export class ShopidPageModule {}
