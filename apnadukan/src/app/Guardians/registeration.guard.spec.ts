import { TestBed } from '@angular/core/testing';

import { RegisterationGuard } from './registeration.guard';

describe('RegisterationGuard', () => {
  let guard: RegisterationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegisterationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
