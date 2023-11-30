import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PedidoService } from './pedido.service';
import { Pedido } from 'src/app/models/pedido/pedido';

describe('PedidoService', () => {
  let service: PedidoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PedidoService]
    });

    service = TestBed.inject(PedidoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um pedido pelo id', () => {
    const pedidoId = 1;
    const mockPedido = new Pedido();
    service.findById(pedidoId).subscribe(pedido => {
      expect(pedido).toEqual(mockPedido);
    });
    const req = httpTestingController.expectOne(`${service.API}/id/${pedidoId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPedido);
  });

  it('deve retornar todos os pedidos', () => {
    const mockPedidos = new Array<Pedido>();
    service.getAll().subscribe(pedidos => {
      expect(pedidos).toEqual(mockPedidos);
    });

    const req = httpTestingController.expectOne(`${service.API}/todos`);
    req.flush(mockPedidos);
  });

  it('deve criar novos pedidos', () => {
    const novoPedido = new Pedido();
    service.post(novoPedido).subscribe(response => {
      expect(response).toEqual(novoPedido);
    });
    const req = httpTestingController.expectOne(`${service.API}/cadastrar`);
    req.flush(novoPedido);
  });

  it('deve atualizar o pedido', () => {
    const pedidoId = 1;
    const pedidoAtt = new Pedido();
    service.put(pedidoId, pedidoAtt).subscribe(response => {
      expect(response).toEqual(pedidoAtt);
    });

    const req = httpTestingController.expectOne(`${service.API}/editar/${pedidoId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(pedidoAtt);
  });

  it('deve finalizar um pedido', () => {
    const pedidoId = 1;
    service.finalizarPedido(pedidoId).subscribe(response => {
      expect(response).toBeTruthy();
    });
    const req = httpTestingController.expectOne(`${service.API}/finalizar/${pedidoId}`);
    expect(req.request.method).toBe('PUT');
    req.flush({ success: true });
  });

  it('deve cancelar um pedido', () => {
    const pedidoId = 1;
    service.cancelar(pedidoId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${service.API}/cancelar/${pedidoId}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('deve reabrir um pedido', () => {
    const pedidoId = 1;
    service.reabrir(pedidoId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne(`${service.API}/reabrir/${pedidoId}`);
    expect(req.request.method).toBe('PUT');
    req.flush({ success: true });
  });
});
