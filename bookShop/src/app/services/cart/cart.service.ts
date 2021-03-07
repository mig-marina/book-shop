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

  addBook(data):IBooksList[] {
    const item = {
      id: this.cartProduct.length,
      item: data,
      count: 1
    }
    this.cartProduct.push(item);
    return this.cartProduct;
  }

}
