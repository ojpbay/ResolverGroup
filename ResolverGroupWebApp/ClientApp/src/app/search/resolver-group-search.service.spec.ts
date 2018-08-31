/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResolverGroupSearchService } from './resolver-group-search.service';

describe('Service: ResolverGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolverGroupSearchService]
    });
  });

  it('should ...', inject([ResolverGroupSearchService], (service: ResolverGroupSearchService) => {
    expect(service).toBeTruthy();
  }));
});
