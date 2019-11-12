import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private urn: string;

  constructor(private http: HttpClient) {
    this.urn = environment.urn + '/vehicles';
  }

  async getAll(): Promise<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.urn).toPromise();
  }

  async save(vehicle: Vehicle): Promise<Object> {
    return this.http.post<Vehicle>(this.urn, vehicle).toPromise();
  }

  async update(vehicle: Vehicle): Promise<Object> {
    return this.http.put<Vehicle>(`${this.urn}/${vehicle.id}`, vehicle).toPromise();
  }

  async delete(vehicle: Vehicle): Promise<Object> {
    return this.http.delete(`${this.urn}/${vehicle.id}`, { responseType: 'text' as 'json'}).toPromise();
  }
}
