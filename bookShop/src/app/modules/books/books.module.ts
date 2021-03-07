import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookListComponent } from '../../components/book-list/book-list.component';
import { BookComponent } from '../../components/book/book.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookComponent
  ],
  exports: [
    BookListComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
