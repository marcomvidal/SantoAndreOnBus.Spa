import { Company } from './Company';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return this.httpService.getAll<Company>(this.urn);
  }

  async save(company: Company): Promise<Object> {
    return this.httpService.save<Company>(this.urn, company);
  }

  async update(company: Company): Promise<Object> {
    return this.httpService.update<Company>(company, this.urn, company.id);
  }

  async delete(company: Company): Promise<Object> {
    return this.httpService.delete(this.urn, company.id);
  }
}
