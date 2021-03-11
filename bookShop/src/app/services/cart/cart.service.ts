import { Injectable } from '@angular/core';

import { IBooksList } from './../../ibooks-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProduct: IBooksList[] = [];
  totalQuantity: number = 0;
  totalSum: number = 0;

  getCartProduct(): IBooksList[] {
    return this.cartProduct;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  getTotalSum(): number {
    return this.totalSum;
  }

  addBook(data): IBooksList[] {
    const item = {
      id: this.cartProduct.length,
      item: data,
      count: 1
    }
    this.cartProduct.push(item);
    this.updateCartData();
    return this.cartProduct;
  }

  increaseQuantity(data) {
    let item = this.cartProduct.find((item) => item.id === data.id);
    item.count += 1;
    this.updateCartData();
  }

  decreaseQuantity(data) {
    let item = this.cartProduct.find((item) => item.id === data.id);
    if(item.count !== 0) {
      item.count -= 1;
      this.updateCartData();
    }
  }

  removeBook(data) {
    this.cartProduct = this.cartProduct.filter((item) => item.id !== data.id);
    this.updateCartData();
  }

  removeAllBook() {
    this.cartProduct = [];
    this.updateCartData();
  }

  updateCartData() {
    this.totalQuantity = this.cartProduct.reduce((s, item) => s += item.count, 0);
    this.totalSum = this.cartProduct.reduce((s, item) => s += item.item.price * item.count, 0);
  }

}
