import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  str: string = '';
  arraySumbols: string[] = [];
  countSumbols: number;

  constructor(n: number) {
    this.countSumbols = n;
  }

  getStr() {
    this.arraySumbols.length = this.countSumbols;
    this.arraySumbols.fill('');
    this.arraySumbols = this.arraySumbols.map((item) => {
      item = this.possible[Math.floor(Math.random() * this.possible.length)];
      return item;
    });
    this.str = this.arraySumbols.join('');
    console.log(this.str);
    return this.str;
  }

}
