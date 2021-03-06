import { NgModule } from '@angular/core';
import { CartPageComponent } from './cart-page.component';
import { CartPageRoutingModule } from './cart-page-routing.module';
import { NgZorroModule } from '../../shared/ng-zorro.module';
import { SharedModule } from '../../shared/shared.module';
import { AdjusterModule } from '../../components/adjuster/adjuster.module';


@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CartPageRoutingModule,
    SharedModule,
    NgZorroModule,
    AdjusterModule
  ]
})
export class CartPageModule { }
