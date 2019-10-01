import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from './Company';
import { environment } from 'src/environments/environment';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient, private httpService: HttpService) {}

  async save(company: Company): Promise<Object> {
    const url: string = environment.urn + '/companies';
    const token: string = await this.httpService.getToken();

    return this.http.post(url, JSON.stringify(company), {headers: this.httpService.getHeaders(token)})
      .toPromise();
  }

  async getAll(): Promise<Company[]> {
    const url: string = environment.urn + '/companies';
    const token: string = await this.httpService.getToken();

    return this.http.get<Company[]>(url, {headers: this.httpService.getHeaders(token)}).toPromise();
  }
}
