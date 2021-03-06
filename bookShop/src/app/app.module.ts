import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CartModule } from './modules/cart/cart.module';

import { AppComponent } from './app.component';
import { BookComponent } from './components/book/book.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
