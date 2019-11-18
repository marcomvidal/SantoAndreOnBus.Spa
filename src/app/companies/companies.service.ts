import { Company } from '../models/Company';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private urn: string;

  constructor(private http: HttpClient) {
    this.urn = environment.urn + '/companies';
  }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(this.urn).pipe(take(1));
  }

  save(company: Company): Observable<Object> {
    return this.http.post<Company>(this.urn, company);
  }

  update(company: Company): Observable<Object> {
    return this.http.put<Company>(`${this.urn}/${company.id}`, company);
  }

  delete(company: Company): Observable<Object> {
    return this.http.delete(`${this.urn}/${company.id}`, { responseType: 'text' as 'json'});
  }
}
