import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PizzaResponse } from '../interfaces/pazza.interface';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaResponse[]> {
    return this.http.get<PizzaResponse[]>('/api/pizzas');
  }
}
