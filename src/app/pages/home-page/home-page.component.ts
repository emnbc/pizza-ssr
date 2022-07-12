import { Component, OnInit } from '@angular/core';
import { Good } from '../../models/good.model';
import { GoodResponse } from '../../interfaces/common.interface';
import { GoodService } from '../../services/good.service';
import { CartService } from '../../services/cart.servise';

@Component({
  selector: 'pzs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  goods: GoodResponse[] = [];

  constructor(private goodService: GoodService, private cartService: CartService) { }

  ngOnInit(): void {
    this.goodService.getPizzas().subscribe(res => {
      this.goods = res;
    });
  }

  addToCart(good: Good): void {
    this.cartService.addToCart(good);
  }

}
