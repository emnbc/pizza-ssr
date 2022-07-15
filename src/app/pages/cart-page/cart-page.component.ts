import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.servise';
import { OrderItem } from '../../models/order-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pzs-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  cart: OrderItem[] = [];
  subscriptions: Subscription[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const sub = this.cartService.cart$.subscribe(cart => this.cart = cart);
    this.subscriptions.push(sub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  deleteItem(order: OrderItem) {
    this.cartService.deleteFromCart(order);
  }

}
