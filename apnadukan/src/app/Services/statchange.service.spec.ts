import { TestBed } from '@angular/core/testing';

import { StatchangeService } from './statchange.service';

describe('StatchangeService', () => {
  let service: StatchangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatchangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
