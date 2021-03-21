import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

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

import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() public itemBook: IBook;
  @Output() onBuyBook = new EventEmitter();

  constructor(private booksService: BooksService, private router: Router) {}

  onBuy(itemBook) {
    this.itemBook.isShow = false;
    this.onBuyBook.emit(itemBook);
  }

  getDataBook(itemBook) {
    this.router.navigate(['product', this.itemBook.id]);
    this.booksService.setItemBooks(itemBook.id);
  }
}
