import { Component, ViewChild, ElementRef } from '@angular/core';

import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  prefixNameShop: string = 'the';
  nameShop: string = 'Book';
  descriptionNameShop: string = "your bookstore";
  color: string = '#2C535A';

  countItems: number = 0;

  constructor(private cartService: CartService) {}

  ngAfterContentChecked() {
    this.countItems = this.cartService.getTotalQuantity();
  }

  @ViewChild("appTitle", {static: false})
  description: ElementRef;

   ngAfterViewInit() {
     this.description.nativeElement.textContent = this.prefixNameShop + this.nameShop;
   }

}
