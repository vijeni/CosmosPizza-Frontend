import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PessoaService } from './cliente.service';
import { Cliente } from 'src/app/models/cliente/cliente';

describe('PessoaService', () => {
  let service: PessoaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PessoaService]
    });

    service = TestBed.inject(PessoaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um cliente pelo id', () => {
    const clienteId = 1;
    const mockCliente = new Cliente();
    service.findById(clienteId).subscribe(cliente => {
      expect(cliente).toEqual(mockCliente);
    });
    const req = httpTestingController.expectOne(`${service.API}/id/${clienteId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCliente);
  });

  it('deve retornar todos os clientes', () => {
    const mockClientes = new Array<Cliente>();
    service.getAll().subscribe(clientes => {
      expect(clientes).toEqual(mockClientes);
    });

    const req = httpTestingController.expectOne(`${service.API}/todos`);
    req.flush(mockClientes);
  });

  it('deve criar novos clientes', () => {
    const novoCliente = new Cliente();
    service.post(novoCliente).subscribe(response => {
      expect(response).toEqual(novoCliente);
    });
    const req = httpTestingController.expectOne(`${service.API}/cadastrar`);
    req.flush(novoCliente);
  });

  it('deve atualizar o cliente', () => {
    const clienteId = 1;
    const clienteAtt = new Cliente();
    service.put(clienteId, clienteAtt).subscribe(response => {
      expect(response).toEqual(clienteAtt);
    });

    const req = httpTestingController.expectOne(`${service.API}/editar/${clienteId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(clienteAtt);
  });

  it('deve desativar um cliente', () => {
    const clienteId = 1;
    service.delete(clienteId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${service.API}/desativar/${clienteId}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('deve ativar um cliente', () => {
    const clienteId = 1;
    service.ativar(clienteId).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpTestingController.expectOne(`${service.API}/ativar/${clienteId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({ success: true });
  });
});
