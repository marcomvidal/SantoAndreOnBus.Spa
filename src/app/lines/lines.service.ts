import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Line } from '../models/Line';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LinesService {

  private urn: string;

  constructor(private http: HttpClient) {
    this.urn = environment.urn + '/lines';
  }

  getByLineName(lineName: string): Observable<Line> {
    return this.http.get<Line>(`${this.urn}/${lineName}`).pipe(take(1));
  }

  getAll(): Observable<Line[]> {
    return this.http.get<Line[]>(this.urn).pipe(take(1));
  }

  save(line: Line): Observable<Object> {
    return this.http.post<Line>(this.urn, line);
  }

  update(line: Line): Observable<Object> {
    return this.http.put<Line>(`${this.urn}/${line.letter}-${line.number}`, line);
  }

  delete(line: Line): Observable<Object> {
    return this.http.delete(`${this.urn}/${line.id}`, { responseType: 'text' as 'json'});
  }
}
