import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Credential } from './Credential';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token: string;

  constructor(private http: HttpClient) {}

  async getToken(): Promise<string> {
    const url: string = environment.urn + '/authentication/login';

    return this.http.post(url, 
      this.getCredentials(),
      {headers: this.getHeaders(), responseType: 'text'})
        .toPromise();
  }

  getCredentials(): string {
    return JSON.stringify({
      email: environment.credential.email,
      password: environment.credential.password
    });
  }

  getHeaders(token?: string): HttpHeaders {
    return token != null ?
      new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`})
      :
      new HttpHeaders({'Content-Type': 'application/json'});
  }
  
}
