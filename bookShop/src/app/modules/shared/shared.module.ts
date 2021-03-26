import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [],
  exports: [
    OrdersModule,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
