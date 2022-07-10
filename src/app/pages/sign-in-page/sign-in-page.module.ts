import { NgModule } from '@angular/core';
import { SignInPageComponent } from './sign-in-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgZorroModule } from 'src/app/shared/ng-zorro.module';
import { SignInPageRoutingModule } from './sign-in-page-routing.module';



@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    SignInPageRoutingModule,
    SharedModule,
    NgZorroModule
  ]
})
export class SignInPageModule { }
