import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';import { SaborService } from './sabor.service';


describe('SaborService', () => {
  let service: SaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [HttpClientModule,HttpClientTestingModule]
});
    service = TestBed.inject(SaborService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
