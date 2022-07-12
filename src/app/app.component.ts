import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pizza-ssr';

  constructor(private auth: AuthService, private cartService: CartService) {}

  ngOnInit() {
    this.auth.checkAuthorization().subscribe();
    this.cartService.getCartFromStorage();
  }
}
