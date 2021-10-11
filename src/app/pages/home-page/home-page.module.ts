import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { NgZorroModule } from '../../shared/ng-zorro.module';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    NgZorroModule
  ]
})
export class HomePageModule { }
