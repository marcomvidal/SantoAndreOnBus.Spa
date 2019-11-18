import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Dashboard } from '../models/Dashboard';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private urn: string;

  constructor(private http: HttpClient) {
    this.urn = environment.urn + '/dashboard';
  }

  get(): Observable<Dashboard> {
    return this.http.get<Dashboard>(this.urn).pipe(take(1));
  }
}
