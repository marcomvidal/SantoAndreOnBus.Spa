import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private service: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.service.getToken() != null) {
      const token: string = `Bearer ${this.service.getToken()}`;
      return next.handle(req.clone({setHeaders: { Authorization: token }}));
    }
    
    return next.handle(req);
  }
}