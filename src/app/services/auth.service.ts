import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LOCAL_STORAGE } from '../app.module';
import { LoginPost } from '../interfaces/common.interface';
import { User } from '../models/user.model';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _token!: string | null;
  user$ = new BehaviorSubject<User>(new User());

  constructor(
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private localStorage: Storage | null
  ) {}

  setTokenToStorage(token: string): void {
    this.localStorage?.setItem(TOKEN_KEY, token);
  }

  getTokenFromStorage(): string | null {
    return this.localStorage?.getItem(TOKEN_KEY)
      ? this.localStorage.getItem(TOKEN_KEY)
      : null;
  }

  getUser() {
    return this.http.get<User>('/api/auth/me');
  }

  checkAuthorization(): Observable<boolean> {
    if (this.user$.getValue().id) {
      return of(true);
    } else if (this.token) {
      return this.http.get<User>('/api/auth/me').pipe(
        map((res) => {
          this.user$.next(new User(res));
          return true;
        }),
        catchError(() => of(false))
      );
    } else {
      return of(false);
    }
  }

  logIn(login: LoginPost) {
    return this.http.post<{accessToken: string}>('/api/auth/login', login);
  }

  logOut(): void {
    this.setToken(null);
    this.localStorage?.removeItem(TOKEN_KEY);
    this.user$.next(new User());
  }

  setToken(value: string | null) {
    this._token = value;
  }

  get token(): string | null {
    if (this._token) {
      return this._token;
    } else if (this.getTokenFromStorage()) {
      this._token = this.getTokenFromStorage();
      return this._token;
    } else {
      return null;
    }
  }
}
