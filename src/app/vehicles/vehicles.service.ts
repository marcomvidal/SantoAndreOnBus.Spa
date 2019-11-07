import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../shared/services/http.service';
import { Vehicle } from '../models/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  private urn: string;

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.urn = environment.urn + '/vehicles';
  }

  async getAll(): Promise<Vehicle[]> {
    return this.httpService.getAll<Vehicle>(this.urn);
  }

  async save(vehicle: Vehicle): Promise<Object> {
    return this.httpService.save<Vehicle>(this.urn, vehicle);
  }

  async update(vehicle: Vehicle): Promise<Object> {
    return this.httpService.update<Vehicle>(vehicle, this.urn, vehicle.id);
  }

  async delete(vehicle: Vehicle): Promise<Object> {
    return this.httpService.delete(this.urn, vehicle.id);
  }
}
