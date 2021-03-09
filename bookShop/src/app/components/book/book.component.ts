import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

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
export class BookComponent {

  @Input() public itemBook:IBook;
  @Output() onBuyBook = new EventEmitter();

  onBuy(itemBook) {
    this.itemBook.isShow = false;
    this.onBuyBook.emit(itemBook);
  }

}
