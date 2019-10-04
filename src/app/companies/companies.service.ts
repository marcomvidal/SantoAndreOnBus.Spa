import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './Company';
import { environment } from 'src/environments/environment';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  private urn: string;

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.urn = environment.urn + '/companies';
  }

  async getAll(): Promise<Company[]> {
    const token: string = await this.httpService.getToken();
    const headers = {headers: this.httpService.getHeaders(token)};

    return this.http.get<Company[]>(this.urn, headers).toPromise();
  }

  async save(company: Company): Promise<Object> {
    const token: string = await this.httpService.getToken();
    const headers = {headers: this.httpService.getHeaders(token)};

    return this.http.post<Company>(this.urn, company, headers).toPromise();
  }

  async update(company: Company): Promise<Object> {
    const token: string = await this.httpService.getToken();
    const headers = {headers: this.httpService.getHeaders(token)};
    const url = `${this.urn}/${company.id}`;
    
    return this.http.patch<Company>(url, company, headers).toPromise();
  }
}
