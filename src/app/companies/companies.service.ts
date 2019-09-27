import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './Company';
import { environment } from 'src/environments/environment';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient, private httpService: HttpService) {}

  save(company: Company) {
    console.log('Posting');
    const url: string = environment.urn + '/companies';
    
    return this.http.post(url, JSON.stringify(company), {headers: this.httpService.tokenHeaders()})
      .subscribe(
        data => console.log({'sucesso': data}),
        error => console.log({'falha': error})
      );
  }
}
