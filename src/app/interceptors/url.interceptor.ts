import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Request } from 'express';

const isAbsoluteUrl = (url: string) => {
  return url.startsWith('http') || url.startsWith('//');
}

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  constructor(@Inject(REQUEST) private request: Request) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.request && !isAbsoluteUrl(req.url)) {
      const protocolHost = `${this.request.protocol}://${this.request.get('host')}`;

      const pathSeparator = !req.url.startsWith('/') ? '/' : '';
      const url = protocolHost + pathSeparator + req.url;

      const serverRequest = req.clone({ url });

      return next.handle(serverRequest);
    }

    return next.handle(req);
  }
}