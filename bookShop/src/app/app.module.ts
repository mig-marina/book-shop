import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BooksModule } from './modules/books/books.module';
import { CartModule } from './modules/cart/cart.module';
import { SharedModule } from './modules/shared/shared.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
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
