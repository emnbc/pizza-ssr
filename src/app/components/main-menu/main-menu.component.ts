import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { CartService } from '../../services/cart.servise';
import { AuthService } from '../../services/auth.service';
import { OrderItem } from 'src/app/models/order-item.model';

@Component({
  selector: 'pzs-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  user!: User;
  cart: OrderItem[] = [];

  constructor(private router: Router, private auth: AuthService, private cartService: CartService) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => (this.user = user));
    this.cartService.cart$.subscribe(cart => this.cart = cart);
  }

  toHome() {
    this.router.navigate(['/']);
  }

  signOut() {
    this.auth.logOut();
    this.toHome();
  }

  get quantityItems() {
    return this.cart.map(i => i.quantity).reduce((a, b) => a + b, 0);
  }
}
