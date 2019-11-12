import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../models/Dashboard';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urn: string;

  constructor(private http: HttpClient) {
    this.urn = environment.urn + '/dashboard';
  }

  async get(): Promise<Dashboard> {
    return this.http.get<Dashboard>(this.urn).toPromise();
  }
}
