import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';import { LoginService } from './login.service';


describe('ingrediente', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [HttpClientModule,HttpClientTestingModule]
});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

