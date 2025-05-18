import { inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
import { exhaustMap, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  authService = inject(AuthService);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        if (!user || !user.token) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          //VALIDATE!!!!
          headers: new HttpHeaders().set('Authorization', user.token),
        });
        return next.handle(modifiedReq);
      }),
    );
  }
}
