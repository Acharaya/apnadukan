import { TestBed } from '@angular/core/testing';

import { ShopguardService } from './shopguard.service';

describe('ShopguardService', () => {
  let service: ShopguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
