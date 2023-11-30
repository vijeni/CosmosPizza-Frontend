import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';import { PessoaService } from './cliente.service';




describe('clienteservice', () => {
  let service: PessoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,HttpClientTestingModule]
    });
    service = TestBed.inject(PessoaService);
    providers: [HttpClientTestingModule]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
