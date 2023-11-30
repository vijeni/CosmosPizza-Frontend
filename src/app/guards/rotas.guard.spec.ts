import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';import { CanActivateFn } from '@angular/router';

import { rotasGuard } from './rotas.guard';

describe('rotasGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rotasGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [HttpClientModule,HttpClientTestingModule]
});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
