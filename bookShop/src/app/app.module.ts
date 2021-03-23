import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BooksModule } from './modules/books/books.module';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';

import { AdminModule } from './modules/admin/admin.module';

import { SharedModule } from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddStyleOnClickDirective } from './shared/directives/add-style-on-click.directive';
import { ExampleHostStyleComponent } from './components/example-host-style/example-host-style.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddStyleOnClickDirective,
    ExampleHostStyleComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BooksModule,
    CartModule,
    OrdersModule,
    AdminModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
