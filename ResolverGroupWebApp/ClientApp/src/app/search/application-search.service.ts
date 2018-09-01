import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IApplication } from './model';

@Injectable({
  providedIn: 'root'
})
export class ApplicationSearchService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<IApplication[]> {
    return this.httpClient.get<IApplication[]>('api/app');
  }
}
