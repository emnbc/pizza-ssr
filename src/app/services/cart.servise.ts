import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE } from '../app.module';

import { Good } from '../models/good.model';
import { Order } from '../models/order.model';

const TOKEN_KEY = 'ps_cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart$ = new BehaviorSubject<Order[]>([])

  constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage | null) { }

  addToCart(good: Good) {

    const order: Order = {
      quantity: 1,
      good: good
    };
    const newCart = [...this.cart$.getValue(), order];

    this.localStorage?.setItem(TOKEN_KEY, JSON.stringify(newCart));
    this.cart$.next(newCart);
  }

  deleteFromCart(order: Order) {

    const cartConteins = this.cart$.getValue();
    const newCart = cartConteins.filter((el) => {
      return order.good?.id !== el.good?.id;
    });

    this.localStorage?.setItem(TOKEN_KEY, JSON.stringify(newCart));
    this.cart$.next(newCart);
  }

  changeQuantity(value: number, id: number) {
    const cartConteins = this.cart$.getValue();
    cartConteins.map((el) => {
      if(el.good?.id === id) {
        el.quantity = value;
      }
    });

    this.localStorage?.setItem(TOKEN_KEY, JSON.stringify(cartConteins));
    this.cart$.next(cartConteins);
  }

  clearCart() {
    this.cart$.next([]);
  }

  getCartFromStorage() {
    const cart = this.localStorage?.getItem(TOKEN_KEY)
        ? JSON.parse(this.localStorage.getItem(TOKEN_KEY) as string)
        : null;
    this.cart$.next(cart && Array.isArray(cart) && cart.length > 0 ? cart : []);
  }

}