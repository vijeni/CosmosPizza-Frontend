import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Pagamento } from 'src/app/models/enums/pagamento/pagamento';
import { TipoPessoa } from 'src/app/models/enums/tipo-pessoa/tipo-pessoa';
import { Pedido } from 'src/app/models/pedido/pedido';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PedidoService } from 'src/app/services/pedido/pedido.service';

@Component({
  selector: 'app-pedidos-details',
  templateUrl: './pedidos-details.component.html',
  styleUrls: ['./pedidos-details.component.scss'],
})
export class PedidosDetailsComponent implements OnInit {
  keys = Object.keys;
  formasPagamento = Pagamento;
  disabled!: boolean;
  id!: string;
  modoEditar!: boolean;
  isErro!: boolean;
  mensagem: string = '';
  pedido = new Pedido();
  router = inject(Router);
  service = inject(PedidoService);
  modalService = inject(NgbModal);
  isClienteModal!: boolean
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let url = this.router.url;
    if (!url.includes('novo')) {
      this.id = this.route.snapshot.paramMap.get('id') as string;
      this.findById(Number(this.id));
      if (url.includes('editar')) {
        this.modoEditar = true;
      } else if (url.includes('toggle')) {
        this.disabled = true;
        this.modoEditar = false;
      } else {
        this.disabled = true;
      }
    }
  }
  // services
  findById(id: number) {
    this.service.findById(id).subscribe({
      next: (pedido) => {
        this.pedido = pedido;
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
    console.log(this.pedido);
  }
  cadastrar() {
    this.service.post(this.pedido).subscribe({
      next: (produto) => {
        this.isErro = false;
        this.mensagem = 'Pedido aberto com sucesso!';
        this.voltar(800);
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
  }
  editar() {
    this.service.put(this.pedido.id, this.pedido).subscribe({
      next: (pedido) => {
        this.isErro = false;
        this.mensagem = 'Pedido editado com sucesso!';
        this.pedido = pedido;
        this.voltar(800);
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
  }
  toggle() {
    if (this.pedido.delecao != null) {
      if (confirm(`Confirma o cancelamento do pedido ${this.pedido.id}?`)) {
        this.service.cancelar(this.pedido.id).subscribe({
          next: (pedido) => {
            this.pedido = pedido;
            this.isErro = false;
            this.mensagem = 'Pedido cancelado com sucesso!';
          },
          error: (resposta) => {
            this.isErro = true;
            this.mensagem = resposta.error;
          },
        });
      }
    } else {
      if (confirm(`Confirma a reabertura do pedido ${this.pedido.id}?`)) {
        this.service.reabrir(this.pedido.id).subscribe({
          next: (pedido) => {
            this.pedido = pedido;
            this.isErro = true;
            this.mensagem = 'Produto reaberto com sucesso!';
          },
          error: (resposta) => {
            this.isErro = true;
            this.mensagem = resposta.error;
          },
        });
      }
    }
  }
  // modal
  abrirModal(template: any) {
    this.modalService.open(template, { size: 'lg' });
  }
  selecionarClienteOrFuncionario(template: any, isCliente: boolean){
    this.isClienteModal = isCliente
    this.abrirModal(template)
  }
  adicionarProduto(template: any){
    console.log(this.pedido.cliente)
    this.abrirModal(template)
  }
  definirPessoa(pessoaSelecionada: Pessoa) {
    this.modalService.dismissAll()
    console.log(pessoaSelecionada)
    if (pessoaSelecionada.tipoPessoa == "CLIENTE" as unknown as TipoPessoa) {
      this.pedido.cliente = pessoaSelecionada;
    } else {
      this.pedido.funcionario = pessoaSelecionada;
    }
  }

  //utils
  voltar(ms: number) {
    this.moveTo();
    setTimeout(() => {
      this.router.navigate(['/web/pedidos']);
    }, ms);
  }
  moveTo() {
    window.scrollTo(0, 0);
  }

 
  
 
}
