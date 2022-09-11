import { NgModule } from '@angular/core';
import { OrdersPageComponent } from './orders-page.component';
import { OrdersPageRoutingModule } from './orders-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroModule } from '../../shared/ng-zorro.module';
import { OrdersModule } from '../../components/orders/orders.module';



@NgModule({
  declarations: [
    OrdersPageComponent
  ],
  imports: [
    OrdersPageRoutingModule,
    SharedModule,
    NgZorroModule,
    OrdersModule,
  ]
})
export class OrdersPageModule { }
