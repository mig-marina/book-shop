import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookComponent } from '../../components/book/book.component';

@NgModule({
  declarations: [
    BookComponent
  ],
  exports: [
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
