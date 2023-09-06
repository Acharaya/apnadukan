import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubshopPageRoutingModule } from './subshop-routing.module';

import { SubshopPage } from './subshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubshopPageRoutingModule
  ],
  declarations: [SubshopPage]
})
export class SubshopPageModule {}
