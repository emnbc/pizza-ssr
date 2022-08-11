import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthGuard } from '../../guards/is-auth.guard';
import { OrdersPageComponent } from './orders-page.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersPageComponent,
    canActivate: [IsAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersPageRoutingModule { }
