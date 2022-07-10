import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  Router,
  Route,
  CanActivate,
  CanActivateChild,
  CanLoad,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class IsAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  isServer: boolean;

  constructor(
    public router: Router,
    public auth: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isServer = isPlatformServer(this.platformId);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.checkLogin();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.checkLogin();
  }

  canLoad(route: Route): Observable<boolean | UrlTree> {
    return this.checkLogin();
  }

  checkLogin() {
    if (this.isServer) {
      return of(this.router.parseUrl('/private'));
    } else {
      return this.auth.checkAuthorization().pipe(
        map((res) => {
          return res
            ? true
            : this.router.parseUrl('/sign-in');
        })
      );
    }
  }
}
