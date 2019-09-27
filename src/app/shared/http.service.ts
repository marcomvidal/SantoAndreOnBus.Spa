import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() {}

  tokenHeaders(): HttpHeaders {
    return new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1Njk2MDg4NjIsImV4cCI6MTU2OTYxMjQ2MiwiaWF0IjoxNTY5NjA4ODYyLCJpc3MiOiJTYW50b0FuZHJlT25CdXMiLCJhdWQiOiJodHRwczovL3NhbnRvYW5kcmVvbmJ1c2FwaS5henVyZXdlYnNpdGVzLm5ldCJ9.NyAcs8-QiHuJbNuS07BW6vQz_d75nGlvidcgahhwIIA'
    });
  }
}
