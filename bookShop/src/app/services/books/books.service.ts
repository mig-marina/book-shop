import { Injectable } from '@angular/core';

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

import { books } from '../../shared/mock-data/data-books';

@Injectable({
  providedIn: 'root'
})

export class BooksService {

  getBooks(): IBook[] {
    return books;
  }
}
