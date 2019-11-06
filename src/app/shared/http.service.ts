import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  async getById<T>(urn: string): Promise<T> {
    const token: string = await this.getToken();
    const headers = {headers: this.getHeadersForJson(token)};

    return this.http.get<T>(urn, headers).toPromise();
  }

  async getAll<T>(urn: string): Promise<T[]> {
    const token: string = await this.getToken();
    const headers = {headers: this.getHeadersForJson(token)};

    return this.http.get<T[]>(urn, headers).toPromise();
  }

  async save<T>(urn: string, model: T): Promise<Object> {
    const token: string = await this.getToken();
    const headers = {headers: this.getHeadersForJson(token)};

    return this.http.post<T>(urn, model, headers).toPromise();
  }

  async update<T>(model: T, urn: string, id: any): Promise<Object> {
    const token: string = await this.getToken();
    const headers = {headers: this.getHeadersForJson(token)};
    const url = `${urn}/${id}`;
    
    return this.http.put<T>(url, model, headers).toPromise();
  }

  async delete(urn: string, id: number): Promise<Object> {
    const token: string = await this.getToken();
    const url = `${urn}/${id}`;

    return this.http.delete(url, this.getHeadersForPlainText(token)).toPromise();
  }

  private async getToken(): Promise<string> {
    const url: string = environment.urn + '/authentication/login';

    return this.http.post(url, 
      this.getCredentials(),
      {headers: this.getHeadersForJson(), responseType: 'text'})
        .toPromise();
  }

  private getCredentials(): string {
    return JSON.stringify({
      email: environment.credential.email,
      password: environment.credential.password
    });
  }

  private getHeadersForJson(token?: string): HttpHeaders {
    return token != null ?
      new HttpHeaders({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`})
      :
      new HttpHeaders({'Content-Type': 'application/json'});
  }

  private getHeadersForPlainText(token?: string): Object {
    return token != null ?
      {headers: new HttpHeaders({'Authorization': `Bearer ${token}`}), responseType: "text" as "json"}
      :
      {headers: new HttpHeaders({'Authorization': `Bearer ${token}`}), responseType: "text" as "json"};
  }
}
