import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';import { TamanhoService } from './tamanho.service';
import { Tamanho } from 'src/app/models/tamanho/tamanho';


describe('tamanho', () => {
  let service: TamanhoService;
  let httpTestingController: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({      imports: [HttpClientModule,HttpClientTestingModule]
});

    service = TestBed.inject(TamanhoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um tamanho pelo id',() =>{
    const tamanhoId = 1;
    const mockTamanho = new Tamanho();
    service.findById(tamanhoId).subscribe(tamanho => {
      expect(tamanho).toEqual(mockTamanho);
    });
    const req = httpTestingController.expectOne(`${service.API}/id/${tamanhoId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockTamanho);
  })

  it('deve retornar todos os tamanhos', () => {
    const mockTamanho = new Array<Tamanho>;
    service.getAll().subscribe(tamanhos => {
      expect(tamanhos).toEqual(mockTamanho);
    });

    const req = httpTestingController.expectOne(`${service.API}/todos`);
    req.flush(mockTamanho);
  });

  it('deve criar novos tamanhos', () => {
    const novoTamanho = new Tamanho;
    service.post(novoTamanho).subscribe(response => {
    expect(response).toEqual(novoTamanho);
    });
    const req = httpTestingController.expectOne(`${service.API}/cadastrar`);
    req.flush(novoTamanho);
  });
  
  it('deve atualizar o tamanho', () => {
    const tamanhoId = 1;
    const tamanhoAtt = new Tamanho;
    service.put(tamanhoId, tamanhoAtt).subscribe(response =>{
      expect(response).toEqual(tamanhoAtt);
    });

    const req = httpTestingController.expectOne(`${service.API}/editar/${tamanhoId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(tamanhoAtt);
  });

  it('deve deletar um tamanho', () => {
    const tamanhoId = 1;
    service.delete(tamanhoId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${service.API}/desativar/${tamanhoId}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('deve ativar um tamanho', () => {
    const tamanhoId = 1;
    service.ativar(tamanhoId).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpTestingController.expectOne(`${service.API}/ativar/${tamanhoId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({success : true});
  })
});
