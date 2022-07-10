import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroModule } from './shared/ng-zorro.module';
import { SharedModule } from './shared/shared.module';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { PrivatePageComponent } from './pages/private-page/private-page.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HomePageModule } from './pages/home-page/home-page.module';

registerLocaleData(en);

export const LOCAL_STORAGE = new InjectionToken<Storage | null>('localStorage');

const getLocalStorage = () => {
  return typeof window !== 'undefined' ? window.localStorage : null;
};

@NgModule({
  declarations: [AppComponent, MainMenuComponent, PrivatePageComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    NgZorroModule,
    HomePageModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
