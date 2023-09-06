import { TestBed } from '@angular/core/testing';

import { ShopguardGuard } from './shopguard.guard';

describe('ShopguardGuard', () => {
  let guard: ShopguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShopguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
