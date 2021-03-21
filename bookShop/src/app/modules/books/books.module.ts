import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListComponent } from '../../components/books-list/books-list.component';
import { BookComponent } from '../../components/book/book.component';
import { PageBookComponent } from '../../components/page-book/page-book.component';

@NgModule({
  declarations: [
    BooksListComponent,
    BookComponent,
    PageBookComponent
  ],
  exports: [
    BooksListComponent,
    BookComponent,
    PageBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
