import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, AfterContentChecked } from '@angular/core';

import { CartService } from './services/cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked {

  constructor(private cartService: CartService) {}
  prefixNameShop = 'the';
  nameShop = 'Book';
  descriptionNameShop = 'your bookstore';
  color = '#2C535A';
  countItems = 0;

  @ViewChild('appTitle', {static: false})
  description: ElementRef;

  ngOnInit(): void {
    this.countItems = this.cartService.getTotalQuantity();
  }

  ngAfterViewInit(): void {
    this.description.nativeElement.textContent = this.prefixNameShop + this.nameShop;
  }

  ngAfterContentChecked(): void {
    this.countItems = this.cartService.getTotalQuantity();
  }

}
