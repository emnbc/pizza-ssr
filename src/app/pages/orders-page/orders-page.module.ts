import { NgModule } from '@angular/core';
import { OrdersPageComponent } from './orders-page.component';
import { OrdersPageRoutingModule } from './orders-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroModule } from '../../shared/ng-zorro.module';



@NgModule({
  declarations: [
    OrdersPageComponent
  ],
  imports: [
    OrdersPageRoutingModule,
    SharedModule,
    NgZorroModule,
  ]
})
export class OrdersPageModule { }
