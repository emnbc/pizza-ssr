"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=168,exports.ids=[168],exports.modules={79168:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OrdersPageModule:()=>OrdersPageModule});var router=__webpack_require__(63423),is_auth_guard=__webpack_require__(1190),core=__webpack_require__(37716),http=__webpack_require__(91841);class OrdersService{constructor(http2){this.http=http2}getOrders(){return this.http.get("/api/orders")}}__name(OrdersService,"OrdersService"),OrdersService.\u0275fac=__name(function(t){return new(t||OrdersService)(core.LFG(http.eN))},"OrdersService_Factory"),OrdersService.\u0275prov=core.Yz7({token:OrdersService,factory:OrdersService.\u0275fac,providedIn:"root"});var ng_zorro_antd_collapse=__webpack_require__(34812),common=__webpack_require__(38583);function OrdersPageComponent_nz_collapse_panel_1_Template(rf,ctx){if(1&rf&&(core.TgZ(0,"nz-collapse-panel",2),core.ALo(1,"date"),core.TgZ(2,"p"),core._uU(3),core.qZA(),core.qZA()),2&rf){const order_r1=ctx.$implicit;core.Q6J("nzHeader",core.lcZ(1,2,order_r1.date)||order_r1.date),core.xp6(3),core.hij("Address: ",order_r1.address,"")}}__name(OrdersPageComponent_nz_collapse_panel_1_Template,"OrdersPageComponent_nz_collapse_panel_1_Template");class OrdersPageComponent{constructor(ordersService){this.ordersService=ordersService,this.orders=[]}ngOnInit(){this.getOrders()}getOrders(){this.ordersService.getOrders().subscribe(orders=>{this.orders=orders})}}__name(OrdersPageComponent,"OrdersPageComponent"),OrdersPageComponent.\u0275fac=__name(function(t){return new(t||OrdersPageComponent)(core.Y36(OrdersService))},"OrdersPageComponent_Factory"),OrdersPageComponent.\u0275cmp=core.Xpm({type:OrdersPageComponent,selectors:[["pzs-orders-page"]],decls:2,vars:2,consts:[[3,"nzBordered"],[3,"nzHeader",4,"ngFor","ngForOf"],[3,"nzHeader"]],template:__name(function(rf,ctx){1&rf&&(core.TgZ(0,"nz-collapse",0),core.YNc(1,OrdersPageComponent_nz_collapse_panel_1_Template,4,4,"nz-collapse-panel",1),core.qZA()),2&rf&&(core.Q6J("nzBordered",!1),core.xp6(1),core.Q6J("ngForOf",ctx.orders))},"OrdersPageComponent_Template"),directives:[ng_zorro_antd_collapse.yH,common.sg,ng_zorro_antd_collapse.Zv],pipes:[common.uU],styles:[""]});const routes=[{path:"",component:OrdersPageComponent,canActivate:[is_auth_guard.c]}];class OrdersPageRoutingModule{}__name(OrdersPageRoutingModule,"OrdersPageRoutingModule"),OrdersPageRoutingModule.\u0275fac=__name(function(t){return new(t||OrdersPageRoutingModule)},"OrdersPageRoutingModule_Factory"),OrdersPageRoutingModule.\u0275mod=core.oAB({type:OrdersPageRoutingModule}),OrdersPageRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});var shared_module=__webpack_require__(44466),ng_zorro_module=__webpack_require__(86076);class OrdersPageModule{}__name(OrdersPageModule,"OrdersPageModule"),OrdersPageModule.\u0275fac=__name(function(t){return new(t||OrdersPageModule)},"OrdersPageModule_Factory"),OrdersPageModule.\u0275mod=core.oAB({type:OrdersPageModule}),OrdersPageModule.\u0275inj=core.cJS({imports:[[OrdersPageRoutingModule,shared_module.m,ng_zorro_module.V]]})}};