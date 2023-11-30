import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IngredientesService } from './ingredientes.service';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';

describe('IngredientesService', () => {
  let service: IngredientesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IngredientesService]
    });

    service = TestBed.inject(IngredientesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um ingrediente pelo id', () => {
    const ingredienteId = 1;
    const mockIngrediente = new Ingrediente();
    service.findById(ingredienteId).subscribe(ingrediente => {
      expect(ingrediente).toEqual(mockIngrediente);
    });
    const req = httpTestingController.expectOne(`${service.API}/id/${ingredienteId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockIngrediente);
  });

  it('deve retornar todos os ingredientes', () => {
    const mockIngredientes = new Array<Ingrediente>();
    service.getAll().subscribe(ingredientes => {
      expect(ingredientes).toEqual(mockIngredientes);
    });

    const req = httpTestingController.expectOne(`${service.API}/todos`);
    req.flush(mockIngredientes);
  });

  it('deve criar novos ingredientes', () => {
    const novoIngrediente = new Ingrediente();
    service.post(novoIngrediente).subscribe(response => {
      expect(response).toEqual(novoIngrediente);
    });
    const req = httpTestingController.expectOne(`${service.API}/cadastrar`);
    req.flush(novoIngrediente);
  });

  it('deve atualizar o ingrediente', () => {
    const ingredienteId = 1;
    const ingredienteAtt = new Ingrediente();
    service.put(ingredienteId, ingredienteAtt).subscribe(response => {
      expect(response).toEqual(ingredienteAtt);
    });

    const req = httpTestingController.expectOne(`${service.API}/editar/${ingredienteId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(ingredienteAtt);
  });

  it('deve desativar um ingrediente', () => {
    const ingredienteId = 1;
    service.desativar(ingredienteId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${service.API}/desativar/${ingredienteId}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('deve ativar um ingrediente', () => {
    const ingredienteId = 1;
    service.ativar(ingredienteId).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpTestingController.expectOne(`${service.API}/ativar/${ingredienteId}`);
    expect(req.request.method).toBe('PUT');
    req.flush({ success: true });
  });
});
