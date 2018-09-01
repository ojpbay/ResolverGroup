import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IResolverGroup } from './model';

@Injectable({
  providedIn: 'root'
})
export class ResolverGroupSearchService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<IResolverGroup[]> {
    return this.httpClient.get<IResolverGroup[]>('api/resolver');
  }
}
