import { Component, OnInit } from '@angular/core';

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
  selector: 'app-page-book',
  templateUrl: './page-book.component.html',
  styleUrls: ['./page-book.component.css']
})
export class PageBookComponent implements OnInit {
  listBooks: IBook;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.listBooks = this.booksService.getItemBooks();
  }

}
