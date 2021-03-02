import { Component, OnInit, Input } from '@angular/core';

import { IBook } from './../ibook';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {

  listBooks = [
    {
      name: 'The ABC Murders',
      count: 1,
      price: 23,
     },
     {
       name: 'The other book',
       count: 1,
       price: 41,
     },
     {
       name: 'The new book',
       count: 1,
       price: 11,
     },
     {
       name: 'The super new book',
       count: 1,
       price: 73,
     }
  ];

  count = 1;

  constructor() { }

  ngOnInit(): void {

  }

  addOne(itemBook) {
    itemBook.count = itemBook.count + 1;
  }

  minusOne(itemBook) {
    if(itemBook.count !== 0) {
      itemBook.count = itemBook.count - 1;
    }
  }

  deleteItem(itemBook) {
    const index = this.listBooks.indexOf(itemBook);
    this.listBooks.splice(index, 1);
  }

}
