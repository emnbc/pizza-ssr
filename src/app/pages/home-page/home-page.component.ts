import { Component, OnInit } from '@angular/core';
import { PizzaResponse } from '../../interfaces/pazza.interface';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'pzs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  pizzas: PizzaResponse[] = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(res => {
      this.pizzas = res;
    });
  }

}
