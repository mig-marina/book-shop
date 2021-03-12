import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartListComponent } from '../../components/cart-list/cart-list.component';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';

import { CartItemOnHoverDirective } from '../../directives/cart-item-on-hover.directive';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartItemOnHoverDirective
  ],
  exports: [
    CartListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
