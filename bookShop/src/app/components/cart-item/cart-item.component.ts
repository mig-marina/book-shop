import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IListBooks } from './../../ilist-books';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {

  @Input() public itemBook:IListBooks;
  @Output() changeCountInList = new EventEmitter();
  @Output() deleteItemInList = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  changeCount(itemBook, event) {
    switch (event) {
      case 1:
        itemBook.count = itemBook.count + 1;
        break;
      case 2:
        if(itemBook.count !== 0) {
          itemBook.count = itemBook.count - 1;
        }
        break;
      default:
        break;
    }
    this.changeCountInList.emit(itemBook);
  }

  deleteItem(itemBook) {
    this.deleteItemInList.emit(itemBook);
  }

}
