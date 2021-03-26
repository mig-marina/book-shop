import { Injectable } from '@angular/core';

import { IBooksList } from './../../ibooks-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProduct: IBooksList[] = [];
  totalQuantity = 0;
  totalSum = 0;

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
    };
    this.cartProduct.push(item);
    this.updateCartData();
    return this.cartProduct;
  }

  increaseQuantity(data): void {
    const item: IBooksList = this.cartProduct.find((i) => i.id === data.id);
    item.count += 1;
    this.updateCartData();
  }

  decreaseQuantity(data): void {
    const item: IBooksList = this.cartProduct.find((i) => i.id === data.id);
    if (item.count !== 0) {
      item.count -= 1;
      this.updateCartData();
    }
  }

  removeBook(data): void {
    this.cartProduct = this.cartProduct.filter((item) => item.id !== data.id);
    this.updateCartData();
  }

  removeAllBook(): void {
    this.cartProduct = [];
    this.updateCartData();
  }

  updateCartData(): void {
    this.totalQuantity = this.cartProduct.reduce((s, item) => s += item.count, 0);
    this.totalSum = this.cartProduct.reduce((s, item) => s += item.item.price * item.count, 0);
  }

}
