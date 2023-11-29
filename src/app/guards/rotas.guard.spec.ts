import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rotasGuard } from './rotas.guard';

describe('rotasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rotasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
