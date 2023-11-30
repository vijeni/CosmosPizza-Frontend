import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SaborService } from './sabor.service';
import { Sabor } from 'src/app/models/sabor/sabor';

describe('SaborService', () => {
  let service: SaborService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SaborService]
    });

    service = TestBed.inject(SaborService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um sabor pelo id', () => {
    const saborId = 1;
    const mockFlavor = new Sabor();
    service.findById(saborId).subscribe(sabor => {
      expect(sabor).toEqual(mockFlavor);
    });
    const req = httpTestingController.expectOne(`${service.API}/id/${saborId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockFlavor);
  });

  it('deve retornar todos os sabores', () => {
    const mockFlavors = new Array<Sabor>();
    service.getAll().subscribe(sabores => {
      expect(sabores).toEqual(mockFlavors);
    });

    const req = httpTestingController.expectOne(`${service.API}/todos`);
    req.flush(mockFlavors);
  });

  it('deve criar novos sabores', () => {
    const novoSabor = new Sabor();
    service.post(novoSabor).subscribe(response => {
      expect(response).toEqual(novoSabor);
    });
    const req = httpTestingController.expectOne(`${service.API}/cadastrar`);
    req.flush(novoSabor);
  });

  it('deve atualizar o sabor', () => {
    const saborId = 1;
    const saborAtt = new Sabor();
    service.put(saborId, saborAtt).subscribe(response => {
      expect(response).toEqual(saborAtt);
    });

    const req = httpTestingController.expectOne(`${service.API}/editar/${saborId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(saborAtt);
  });

  it('deve deletar um sabor', () => {
    const saborId = 1;
    service.delete(saborId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${service.API}/deletar/${saborId}`);
    expect(req.request.method).toBe('DELETE');
  });
});
