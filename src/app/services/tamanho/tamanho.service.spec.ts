import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';import { TamanhoService } from './tamanho.service';


describe('tamanho', () => {
  let service: TamanhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [HttpClientModule,HttpClientTestingModule]
});
    service = TestBed.inject(TamanhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
