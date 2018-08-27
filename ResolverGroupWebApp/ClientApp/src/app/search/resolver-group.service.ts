import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResolverGroupService {
  constructor(private httpClient: HttpClient) {}

  get() {
    return this.httpClient.get('api/resolver');
  }
}
