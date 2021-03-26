import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { BooksService } from '../../services/books/books.service';

enum Categories {
  Detective = 'Detective',
  History = 'History',
  Scientific = 'Scientific',
  Fantasy = 'Fantasy',
  Children = 'Children',
  Adventures = 'Adventures',
  Horror = 'Horror'
}

import { IBook } from './../../ibook';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() public itemBook: IBook;
  @Output() buyBook = new EventEmitter();

  constructor(private booksService: BooksService, private router: Router) {}

  onBuy(itemBook): void {
    this.itemBook.isShow = false;
    this.buyBook.emit(itemBook);
  }

  getDataBook(itemBook): void {
    this.router.navigate(['product', this.itemBook.id]);
    this.booksService.setItemBooks(itemBook.id);
  }
}
