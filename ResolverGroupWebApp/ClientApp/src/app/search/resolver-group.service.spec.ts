/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ResolverGroupService } from './resolver-group.service';

describe('Service: ResolverGroup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolverGroupService]
    });
  });

  it('should ...', inject([ResolverGroupService], (service: ResolverGroupService) => {
    expect(service).toBeTruthy();
  }));
});
