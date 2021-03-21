import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  message: string = 'Your comment to the order will be displayed here';

  constructor(private cartService: CartService, private router: Router) {}

  updateUserMessage(event) {
    const messageUser = event.target.value;
    this.message = messageUser;
  }

  completeOrder() {
    console.log('the order is formed - something will happen to it');
    this.cartService.removeAllBook();
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
