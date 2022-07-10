import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgZorroModule } from 'src/app/shared/ng-zorro.module';
import { ProfilePageRoutingModule } from './profile-page-routing.module';


@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    ProfilePageRoutingModule,
    SharedModule,
    NgZorroModule
  ]
})
export class ProfilePageModule { }
