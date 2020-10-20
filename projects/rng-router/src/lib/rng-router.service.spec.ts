import { TestBed } from '@angular/core/testing';

import { RngRouterService } from './rng-router.service';

describe('RngRouterService', () => {
  let service: RngRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RngRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
