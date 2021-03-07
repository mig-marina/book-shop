import { Component, Input, OnInit } from '@angular/core';

import { IBook } from './../../ibook';

enum Categories {
  Detective = 'Detective',
  History = 'History',
  Scientific = 'Scientific',
  Fantasy = 'Fantasy',
  Children = 'Children',
  Adventures = 'Adventures',
  Horror = 'Horror'
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() public itemBook:IBook;

  count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onBuy() {
    const comment = document.querySelector('.comment-buy');
    comment.textContent = 'item in cart';
    this.count = 1;
  }

}
