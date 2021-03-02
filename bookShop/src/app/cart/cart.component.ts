import { Component, OnInit } from '@angular/core';

import { IListBooks } from './../ilist-books';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  listBooks:IListBooks[] = [
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


  constructor() { }

  ngOnInit(): void {
  }

  // addOne(itemBook) {
  //   itemBook.count = itemBook.count + 1;
  // }
  //
  // minusOne(itemBook) {
  //   if(itemBook.count !== 0) {
  //     itemBook.count = itemBook.count - 1;
  //   }
  // }

  // deleteItem(itemBook) {
  //   const index = this.listBooks.indexOf(itemBook);
  //   this.listBooks.splice(index, 1);
  // }

}
