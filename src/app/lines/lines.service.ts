import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Line } from '../models/Line';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  private urn: string;

  constructor(private http: HttpClient) {
    this.urn = environment.urn + '/lines';
  }

  async getByLineName(lineName: string): Promise<Line> {
    return this.http.get<Line>(`${this.urn}/${lineName}`).toPromise();
  }

  async getAll(): Promise<Line[]> {
    return this.http.get<Line[]>(this.urn).toPromise();
  }

  async save(line: Line): Promise<Object> {
    return this.http.post<Line>(this.urn, line).toPromise();
  }

  async update(line: Line): Promise<Object> {
    return this.http.put<Line>(`${this.urn}/${line.id}`, line).toPromise();
  }

  async delete(line: Line): Promise<Object> {
    return this.http.delete(`${this.urn}/${line.id}`, { responseType: 'text' as 'json'}).toPromise();
  }
}
