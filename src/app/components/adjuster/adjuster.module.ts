import { NgModule } from '@angular/core';

import { AdjusterComponent } from './adjuster.component';
import { NgZorroModule } from '../../shared/ng-zorro.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AdjusterComponent
  ],
  imports: [
    SharedModule,
    NgZorroModule
  ],
  exports: [
    AdjusterComponent
  ]
})
export class AdjusterModule { }
