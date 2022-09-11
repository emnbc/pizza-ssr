import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroModule } from '../../shared/ng-zorro.module';
import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { OrdersModule } from '../../components/orders/orders.module';


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    ProfilePageRoutingModule,
    SharedModule,
    NgZorroModule,
    OrdersModule,
  ]
})
export class ProfilePageModule { }
