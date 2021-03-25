import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { of } from 'rxjs';

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

import { books } from '../../shared/mock-data/data-books';

@Injectable({
  providedIn: 'root'
})

export class BooksService {
  itemBook: IBook;
  listBooks: IBook[] = books;

  getBooks(): Observable<IBook[]> {
    return of(books);
  }

  setItemBooks(data): IBook {
    return this.itemBook = books.find((item) => item.id === data);
  }

  getItemBooks(): IBook {
    return this.itemBook;
  }

  toggleIsShow(data): IBook[] {
    this.listBooks.filter((item) => item.id === data).forEach((item) => item.isShow = true);
    return this.listBooks;
  }

  toggleIsShowAll(): IBook[] {
    this.listBooks.filter((item) => item.isShow === false).forEach((item) => item.isShow = true);
    return this.listBooks;
  }

}
