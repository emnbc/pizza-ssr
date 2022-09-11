import { NgModule } from "@angular/core";
import { NgZorroModule } from "../../shared/ng-zorro.module";
import { SharedModule } from "../../shared/shared.module";
import { OrdersComponent } from "./orders.component";

@NgModule({
    declarations: [OrdersComponent],
    imports: [
        SharedModule,
        NgZorroModule
    ],
    exports: [
        OrdersComponent
    ]
})
export class OrdersModule {}