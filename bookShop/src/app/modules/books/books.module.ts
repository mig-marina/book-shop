import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListComponent } from '../../components/books-list/books-list.component';
import { BookComponent } from '../../components/book/book.component';

@NgModule({
  declarations: [
    BooksListComponent,
    BookComponent
  ],
  exports: [
    BooksListComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
