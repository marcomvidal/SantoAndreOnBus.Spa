import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Credential } from '../models/Credential';
import { Token } from '../models/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string;
  isLogged: boolean;
  showMenuEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) {
    this.url = environment.urn + '/authentication/login';
  }

  login(credential: Credential): Observable<Token> {
    return this.http.post<Token>(this.url, credential)
      .pipe(
        take(1),
        tap(authentication => {
          localStorage.setItem('token', authentication.token);
          localStorage.setItem('username', credential.email);
          this.isLogged = true;
          this.showMenuEmitter.emit(this.isLogged);
        }));
  }

  logoff(): void {
    localStorage.clear();
    this.isLogged = false;
    this.showMenuEmitter.emit(this.isLogged);

    this.router.navigate(['/login']);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }
}
