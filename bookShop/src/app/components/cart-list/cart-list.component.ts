import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IBooksList } from '../../ibooks-list';
import { CartService } from '../../services/cart/cart.service';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  listBookForCart: IBooksList[] = [];

  count = 0;
  summ = 0;
  typeSort = '';
  isDescending = true;

  constructor(
    private cartService: CartService,
    private booksService: BooksService,
    private router: Router) {}

  ngOnInit(): void {
    this.updateList();
    this.updateData();
  }

  // ngAfterContentChecked(): void {
  //   this.updateData();
  // }

  goToOrder(): void {
    this.router.navigate(['/order']);
  }

  updateList(): void {
    this.listBookForCart = this.cartService.getCartProduct();
  }

  updateData(): void {
    this.count = this.cartService.getTotalQuantity();
    this.summ = this.cartService.getTotalSum();
  }

  deleteItem(data): void {
    this.cartService.removeBook(data);
    this.updateList();
  }

  deleteAllItem(): void {
    this.cartService.removeAllBook();
    this.booksService.toggleIsShowAll();
    this.updateList();
  }

}
