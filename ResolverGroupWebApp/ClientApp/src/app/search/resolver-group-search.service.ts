import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResolverGroup } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverGroupSearchService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<IResolverGroup[]> {
    return this.httpClient.get<IResolverGroup[]>('api/resolver');
  }
}
