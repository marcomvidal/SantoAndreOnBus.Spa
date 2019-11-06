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

  async getByLineName(lineName: string): Promise<Line> {
    return this.httpService.getOne<Line>(`${this.urn}/${lineName}`);
  }

  async getAll(): Promise<Line[]> {
    return this.httpService.getAll<Line>(this.urn);
  }

  async save(line: Line): Promise<Object> {
    return this.httpService.save<Line>(this.urn, line);
  }

  async update(line: Line): Promise<Object> {
    return this.httpService.update<Line>(line, this.urn, `${line.letter}-${line.number}`);
  }

  async delete(line: Line): Promise<Object> {
    return this.httpService.delete(this.urn, line.id);
  }
}
