import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  message = 'Your comment to the order will be displayed here';

  constructor(private cartService: CartService, private router: Router) {}

  updateUserMessage(event): void {
    const messageUser = event.target.value;
    this.message = messageUser;
  }

  completeOrder(): void {
    console.log('the order is formed - something will happen to it');
    this.cartService.removeAllBook();
  }

  goToCart(): void {
    this.router.navigate(['/cart']);
  }
}
