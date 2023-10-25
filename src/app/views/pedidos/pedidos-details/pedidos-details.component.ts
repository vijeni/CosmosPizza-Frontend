import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pagamento } from 'src/app/models/enums/pagamento/pagamento';
import { Pedido } from 'src/app/models/pedido/pedido';
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
        this.voltar()
        
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
  }

  voltar(){
    this.moveTo()
    setTimeout(() =>{
      this.router.navigate(['/web/pedidos'])
    }, 1500)
  }
  moveTo() {
    window.scrollTo(0, 0);
  }

  editar() {
    this.service.put(this.pedido.id, this.pedido).subscribe({
      next: (pedido) => {
        this.isErro = false;
        this.mensagem = 'Pedido editado com sucesso!';
        this.pedido = pedido;
        this.voltar()        
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
}
