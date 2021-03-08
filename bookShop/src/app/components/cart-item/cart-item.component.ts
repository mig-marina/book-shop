import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBooksList } from '../../ibooks-list';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})

export class CartItemComponent implements OnInit {

  @Input() public itemBook:IBooksList;

  @Output() increaseItem = new EventEmitter();
  @Output() decreaseItem = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  increase(itemBook) {
    this.cartService.increaseQuantity(itemBook);
  }

  decrease(itemBook) {
    this.cartService.decreaseQuantity(itemBook);
  }

}
