import { Component, OnInit } from '@angular/core';

import { IListBooks } from './../../ilist-books'; //delete
import { IBooksList } from '../../ibooks-list';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  listBookForCart: IBooksList[] = [];
  //delete
  listBooks:IListBooks[] = [
    {
      id: 0,
      name: 'The ABC Murders',
      count: 1,
      price: 23,
     },
     {
       id: 1,
       name: 'The other book',
       count: 1,
       price: 41,
     },
     {
       id: 2,
       name: 'The new book',
       count: 1,
       price: 11,
     },
     {
       id: 3,
       name: 'The super new book',
       count: 1,
       price: 73,
     }
  ];

  summ:number = 0;
  message:string = 'Your comment to the order will be displayed here';

  constructor(private cartService: CartService) {
    this.listBookForCart = this.cartService.getCartProduct();
    console.log(this.listBookForCart);
  }

  ngOnInit(): void {
    this.getSum();
  }

  ngAfterViewChecked() {
    this.listBookForCart = this.cartService.getCartProduct();
    console.log(this.listBookForCart);
  }

  changeCountInList() {
    this.getSum();
  }

  deleteItemInList(data) {
    this.listBooks = this.listBooks.filter((item) => item.id !== data.id);
    this.getSum();
  }

    getSum() {
      this.summ = this.listBookForCart.reduce((s,item) => s + item.item.price * item.count, 0);
    }

  updateUserMessage(event) {
    const messageUser = event.target.value;
    this.message = messageUser;
  }

}
