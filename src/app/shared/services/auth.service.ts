import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Credential } from '../../models/Credential';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credential: Credential): Observable<Credential> {
    return this.http.post<Credential>(`${environment.urn}/authentication/login`, credential);
  }
}
