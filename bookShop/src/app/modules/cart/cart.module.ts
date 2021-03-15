import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartListComponent } from '../../components/cart-list/cart-list.component';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';

import { CartItemOnHoverDirective } from '../../directives/cart-item-on-hover.directive';

import { OrderByPipe } from '../../shared/pipes/order-by.pipe';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartItemOnHoverDirective,
    OrderByPipe
  ],
  exports: [
    CartListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CartModule { }
