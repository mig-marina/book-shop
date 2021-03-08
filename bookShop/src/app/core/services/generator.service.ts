import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  possible:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  str:string = '';
  arraySumbols:string[] = [];

  constructor() { }

  getStr(n) {
    this.arraySumbols.length = n;
    this.arraySumbols.fill('');
    this.arraySumbols = this.arraySumbols.map((item) => {
      item = this.possible[Math.floor(Math.random() * this.possible.length)];
      return item;
    });
    this.str = this.arraySumbols.join('');
    return this.str;
  }

}
