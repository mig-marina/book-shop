import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from '../../components/admin/admin.component';
import { AdminProductsComponent } from '../../components/admin-products/admin-products.component';
import { AdminAddProductComponent } from '../../components/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from '../../components/admin-edit-product/admin-edit-product.component';
import { AdminOrdersComponent } from '../../components/admin-orders/admin-orders.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
    AdminOrdersComponent
  ],
  exports: [
    AdminComponent,
    AdminProductsComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
    AdminOrdersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
