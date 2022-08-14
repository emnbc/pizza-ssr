import { Component, OnInit } from '@angular/core';
import { OrderResponse } from '../../interfaces/common.interface';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'pzs-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {

  orders: OrderResponse[] = [];
  
  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.getOrders();
  }

  private getOrders() {
    this.ordersService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

}
