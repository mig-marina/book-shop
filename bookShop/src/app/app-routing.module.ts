import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './components/books-list/books-list.component';
import { PageBookComponent } from './components/page-book/page-book.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: 'products-list', component: BooksListComponent },
  { path: 'product/:productID', component: PageBookComponent },
  { path: 'cart', component: CartListComponent },
  { path: 'order', component: OrderComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/products-list', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
