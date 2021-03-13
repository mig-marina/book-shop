import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BooksModule } from './modules/books/books.module';
import { CartModule } from './modules/cart/cart.module';
import { SharedModule } from './modules/shared/shared.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddStyleOnClickDirective } from './shared/directives/add-style-on-click.directive';
import { ExampleHostStyleComponent } from './components/example-host-style/example-host-style.component';
// import { OrderByPipe } from './shared/pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddStyleOnClickDirective,
    ExampleHostStyleComponent
    // OrderByPipe
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
