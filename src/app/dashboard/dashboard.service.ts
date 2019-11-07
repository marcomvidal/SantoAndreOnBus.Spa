import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../models/Dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urn: string;

  constructor(private httpService: HttpService) {
    this.urn = environment.urn + '/dashboard';
  }

  async get(): Promise<Dashboard> {
    return this.httpService.getOne<Dashboard>(this.urn);
  }
}
