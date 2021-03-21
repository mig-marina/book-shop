import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './guards/auth.guard';
// import { ExitAboutGuard } from './guards/exit-about-guard.guard';

import { BooksListComponent } from './components/books-list/books-list.component';
import { PageBookComponent } from './components/page-book/page-book.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: 'products-list', component: BooksListComponent },
  { path: 'product/:productID', component: PageBookComponent },
  { path: 'cart', component: CartListComponent },
  { path: 'order', component: OrderComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      // { path: '', redirectTo: 'products', pathMatch: 'full'},
      { path: 'products', component: AdminProductsComponent},
      { path: 'products/add', component: AdminAddProductComponent},
      { path: 'products/edit', component: AdminEditProductComponent},
      { path: 'products/orders', component: AdminOrdersComponent}
    ]
    // canActivate: [AuthGuard],
    // canDeactivate: [ExitAboutGuard]
  },
  { path: '', redirectTo: '/products-list', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    // CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
