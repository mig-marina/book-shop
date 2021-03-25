import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartService } from '../../services/cart/cart.service';
import { BooksService } from '../../services/books/books.service';

import { IBooksList } from '../../ibooks-list';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent {

  @Input() public itemBook: IBooksList;
  @Output() deleteItem = new EventEmitter();

  constructor(private cartService: CartService, private booksService: BooksService) { }

  increase(itemBook): void {
    this.cartService.increaseQuantity(itemBook);
  }

  decrease(itemBook): void {
    this.cartService.decreaseQuantity(itemBook);
  }

  delete(itemBook): void {
    this.booksService.toggleIsShow(itemBook.item.id);
    this.deleteItem.emit(itemBook);
  }

}
