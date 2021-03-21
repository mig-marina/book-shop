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

  count: number = 0;
  summ: number = 0;
  typeSort: string = '';
  isDescending: boolean = true;

  constructor(
    private cartService: CartService,
    private booksService: BooksService,
    private router: Router) {}

  ngOnInit(): void {
    this.updateList();
    this.updateData();
  }

  goToOrder() {
    this.router.navigate(['/order']);
  }

  ngAfterContentChecked() {
    this.updateData();
  }

  updateList() {
    this.listBookForCart = this.cartService.getCartProduct();
  }

  updateData() {
    this.count = this.cartService.getTotalQuantity();
    this.summ = this.cartService.getTotalSum();
  }

  deleteItem(data) {
    this.cartService.removeBook(data);
    this.updateList();
  }

  deleteAllItem() {
    this.cartService.removeAllBook();
    this.booksService.toggleIsShowAll();
    this.updateList();
  }

}
