import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GoodResponse } from '../interfaces/common.interface';

@Injectable({
  providedIn: 'root',
})
export class GoodService {
  constructor(private http: HttpClient) {}

  getGoods(): Observable<GoodResponse[]> {
    return this.http.get<GoodResponse[]>('/api/pizzas');
  }
}
