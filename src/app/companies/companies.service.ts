import { Company } from '../models/Company';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private urn: string;

  constructor(private http: HttpClient) {
    this.urn = environment.urn + '/companies';
  }

  async getAll(): Promise<Company[]> {
    return this.http.get<Company[]>(this.urn).toPromise();
  }

  async save(company: Company): Promise<Object> {
    return this.http.post<Company>(this.urn, company).toPromise();
  }

  async update(company: Company): Promise<Object> {
    return this.http.put<Company>(`${this.urn}/${company.id}`, company).toPromise();
  }

  async delete(company: Company): Promise<Object> {
    return this.http.delete(`${this.urn}/${company.id}`, { responseType: 'text' as 'json'}).toPromise();
  }
}
