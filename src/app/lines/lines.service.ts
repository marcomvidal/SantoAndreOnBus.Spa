import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../shared/http.service';
import { environment } from 'src/environments/environment';
import { Line } from './Line';

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  private urn: string;

  constructor(private http: HttpClient, private httpService: HttpService) {
    this.urn = environment.urn + '/lines';
  }

  async getById(id: number): Promise<Line> {
    return this.httpService.getById<Line>(`${this.urn}/${id}`);
  }

  async getAll(): Promise<Line[]> {
    return this.httpService.getAll<Line>(this.urn);
  }

  async save(line: Line): Promise<Object> {
    return this.httpService.save<Line>(this.urn, line);
  }

  async delete(line: Line): Promise<Object> {
    return this.httpService.delete(this.urn, line.id);
  }
}
