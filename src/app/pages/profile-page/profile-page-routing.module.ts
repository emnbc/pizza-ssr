import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from '../../guards/is-auth.guard';
import { ProfilePageComponent } from './profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    canActivate: [IsAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
