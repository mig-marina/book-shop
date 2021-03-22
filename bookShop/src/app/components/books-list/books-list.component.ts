import { Component, OnInit } from '@angular/core';

import { IBook } from './../../ibook';
import { IBooksList } from '../../ibooks-list';

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
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  listBooks: IBook[] = [];
  listCart: IBooksList[] = [];

  constructor(private booksService: BooksService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe(data => this.listBooks = data);
  }

  buyBook(data): void {
    this.cartService.addBook(data);
  }

}
