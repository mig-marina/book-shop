import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from '../../components/order/order.component';

@NgModule({
  declarations: [
    OrderComponent
  ],
  exports: [
    OrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrdersModule { }
