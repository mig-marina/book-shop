import { Injectable } from '@angular/core';

import { IBooksList } from './../../ibooks-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProduct: IBooksList[] = [];
  totalQuantity: number = 0;
  totalSum: number = 0;

  constructor() { }

  getCartProduct():IBooksList[] {
    return this.cartProduct;
  }

  addBook(data):IBooksList[] {
    const item = {
      id: this.cartProduct.length,
      item: data,
      count: 1
    }
    this.cartProduct.push(item);
    return this.cartProduct;
  }

  increaseQuantity(data) {
    this.cartProduct.filter((item) => item.id === data.id)[0].count += 1;
  }

  decreaseQuantity(data) {
    if(this.cartProduct.filter((item) => item.id === data.id)[0].count !== 0) {
      this.cartProduct.filter((item) => item.id === data.id)[0].count -= 1;
    }
  }

}
