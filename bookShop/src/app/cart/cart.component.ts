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

  getSum() {
    this.summ = this.listBooks.reduce((s,item) => s + item.price * item.count, 0);
  }

  constructor() { }

  ngOnInit(): void {
    this.getSum();
  }

  changeCountInList() {
    this.getSum();
  }

  deleteItemInList(data) {
    this.listBooks = this.listBooks.filter((item) => item.id !== data.id);
    this.getSum();
  }

  updateUserMessage(event) {
    const messageUser = event.target.value;
    this.message = messageUser;
  }

}
