import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroModule } from '../../shared/ng-zorro.module';
import { HomePageRoutingModule } from './home-page-routing.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    SharedModule,
    NgZorroModule
  ]
})
export class HomePageModule { }
