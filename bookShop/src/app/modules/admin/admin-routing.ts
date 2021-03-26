import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { AdminComponent } from '../../components/admin/admin.component';
import { AdminProductsComponent } from '../../components/admin-products/admin-products.component';
import { AdminAddProductComponent } from '../../components/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from '../../components/admin-edit-product/admin-edit-product.component';
import { AdminOrdersComponent } from '../../components/admin-orders/admin-orders.component';

export const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'products', component: AdminProductsComponent},
      { path: 'products/add', component: AdminAddProductComponent},
      { path: 'products/edit', component: AdminEditProductComponent},
      { path: 'products/orders', component: AdminOrdersComponent}
    ]
  }
];
