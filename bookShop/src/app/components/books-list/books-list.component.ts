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

// import { books } from '../../shared/mock-data/data-books';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  // listBooks:IBook[] = books;
  listBooks:IBook[] = [];
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.listBooks = this.booksService.getBooks();
  }

}
