import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProdutoService } from './produto.service';
import Produto from 'src/app/models/produto/produto';

describe('ProdutoService', () => {
  let service: ProdutoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoService]
    });

    service = TestBed.inject(ProdutoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um produto pelo id', () => {
    const productId = 1;
    const mockProduct = new Produto();
    service.findById(productId).subscribe(product => {
      expect(product).toEqual(mockProduct);
    });
    const req = httpTestingController.expectOne(`${service.API}/id/${productId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);
  });

  it('deve retornar todos os produtos', () => {
    const mockProducts = new Array<Produto>();
    service.getAll().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`${service.API}/todos`);
    req.flush(mockProducts);
  });

  it('deve retornar todos os produtos ativos', () => {
    const mockProducts = new Array<Produto>();
    service.getAllAtivos().subscribe(products => {
      expect(products).toEqual(mockProducts);
    });

    const req = httpTestingController.expectOne(`${service.API}/todos/ativos`);
    req.flush(mockProducts);
  });

  it('deve criar novos produtos', () => {
    const newProduct = new Produto();
    service.post(newProduct).subscribe(response => {
      expect(response).toEqual(newProduct);
    });
    const req = httpTestingController.expectOne(`${service.API}/cadastrar`);
    req.flush(newProduct);
  });

  it('deve atualizar o produto', () => {
    const productId = 1;
    const updatedProduct = new Produto();
    service.put(productId, updatedProduct).subscribe(response => {
      expect(response).toEqual(updatedProduct);
    });

    const req = httpTestingController.expectOne(`${service.API}/editar/${productId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(updatedProduct);
  });

  it('deve desativar um produto', () => {
    const productId = 1;
    service.desativar(productId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${service.API}/desativar/${productId}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('deve ativar um produto', () => {
    const productId = 1;
    service.ativar(productId).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpTestingController.expectOne(`${service.API}/ativar/${productId}`);
    expect(req.request.method).toBe('PUT');
    req.flush({ success: true });
  });
});
