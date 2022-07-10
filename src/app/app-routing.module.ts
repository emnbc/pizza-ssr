import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from './guards/is-auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  { 
    path: 'profile',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then(m => m.ProfilePageModule),
    canLoad: [IsAuthGuard]
  },
  { 
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in-page/sign-in-page.module').then(m => m.SignInPageModule)
  },
  {
    path: 'private',
    component: PrivatePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
