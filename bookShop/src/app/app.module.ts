import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BooksModule } from './modules/books/books.module';
import { CartModule } from './modules/cart/cart.module';
import { SharedModule } from './modules/shared/shared.module';


import { AppComponent } from './app.component';
import { CartListComponent } from './cart-list/cart-list.component';
// import { BooksListComponent } from './books-list/books-list.component';
// import { BookListComponent } from './book-list/book-list.component';
// import { BookComponent } from './components/book/book.component';
// import { CartComponent } from './components/cart/cart.component';
// import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CartListComponent
    // BooksListComponent
    // BookListComponent
    // BookComponent,
    // CartComponent,
    // CartItemComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    CartModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
