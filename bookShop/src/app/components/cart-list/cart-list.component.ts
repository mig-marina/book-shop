import { Component, OnInit } from '@angular/core';

import { IBooksList } from '../../ibooks-list';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  listBookForCart: IBooksList[] = [];

  count: number = 0;
  summ: number = 0;
  message: string = 'Your comment to the order will be displayed here';
  typeSort: string = '';
  isDescending: boolean = true;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.updateList();
    this.updateData();
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

  updateUserMessage(event) {
    const messageUser = event.target.value;
    this.message = messageUser;
  }

  deleteItem(data) {
    console.log('parent');
    this.cartService.removeBook(data);
    this.updateList();
  }

  deleteAllItem() {
    this.cartService.removeAllBook();
    this.updateList();
  }

}
