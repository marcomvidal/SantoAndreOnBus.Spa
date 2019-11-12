import { Injectable, Injector, ɵConsole } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService: AuthService = this.injector.get(AuthService);

    if (authService.getToken() != null) {
      const tokenizedReq = req.clone({
        setHeaders: { Authorization: `Bearer ${authService.getToken()}` }
      });

      return next.handle(tokenizedReq);
    } else {
      return next.handle(req);
    }
  }
}