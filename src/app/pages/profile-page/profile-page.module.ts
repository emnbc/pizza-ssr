import { NgModule } from '@angular/core';
import { ProfilePageComponent } from './profile-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgZorroModule } from 'src/app/shared/ng-zorro.module';



@NgModule({
  declarations: [
    ProfilePageComponent
  ],
  imports: [
    SharedModule,
    NgZorroModule
  ]
})
export class ProfilePageModule { }
