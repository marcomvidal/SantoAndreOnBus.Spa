import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/Vehicle';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private urn: string;

  constructor(private http: HttpClient) {
    this.urn = environment.urn + '/vehicles';
  }

  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.urn).pipe(take(1));
  }

  save(vehicle: Vehicle): Observable<Object> {
    return this.http.post<Vehicle>(this.urn, vehicle);
  }

  update(vehicle: Vehicle): Observable<Object> {
    return this.http.put<Vehicle>(`${this.urn}/${vehicle.id}`, vehicle);
  }

  delete(vehicle: Vehicle): Observable<Object> {
    return this.http.delete(`${this.urn}/${vehicle.id}`, { responseType: 'text' as 'json'});
  }
}
