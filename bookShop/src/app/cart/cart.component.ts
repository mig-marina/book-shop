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

  summ:number = 0;

  constructor() { }

  ngOnInit(): void {


  }

  ngAfterViewInit() {
    this.getSum();
  }

  ngAfterViewChecked() {
    this.getSum();
  }

  getSum() {
    let res:number = 0;
    const list = document.querySelectorAll('.cart-item-content .cart-item-price');
    for(let i = 0; i < list.length; i++) {
      res = res + Number(list[i].textContent);
    }
    this.summ = res;
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
