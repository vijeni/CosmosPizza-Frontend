import { DecimalPipe } from '@angular/common';
import {
  Component,
  OnInit,
  PipeTransform,
  inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, startWith } from 'rxjs';
import { Pedido } from 'src/app/models/pedido/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss'],
  providers: [DecimalPipe]
})
export class PedidosListComponent implements OnInit {
  pedidos: Pedido[] = [];
  pedidos$: Pedido[] = [];
  isErro!: boolean;
  mensagem: string = '';
  modalService = inject(NgbModal);
  pedidoService = inject(PedidoService);
  router = inject(Router);
  filter = new FormControl('');
  decimalPipe = inject(DecimalPipe);
  switchEstado = new FormControl(false);


  constructor() {}
  async ngOnInit() {
    await this.getAll();
    setTimeout(() => {
      this.filter.valueChanges.pipe(
        startWith(''),
        map((text) => this.search(text as string, this.decimalPipe))
      ).subscribe({next: (pedidosFiltrados) => {
        this.pedidos$ = pedidosFiltrados
      }});
    }, 1000);
  }
 
  async getAll() {
    this.pedidoService.getAll().subscribe({
      next: (produtos) => {
        this.pedidos = produtos;
        },
      error: (erro) => {
        this.isErro = true;
        this.mensagem = 'Ocorreu um erro!';
        console.log(erro.error);
      },
    });
  }
  editar(id: number) {
    this.router.navigate(['/web/pedido/editar', id]);
  }
  toggle(id: number) {
    this.router.navigate(['/web/pedido/toggle', id]);
  }
  search(text: string, pipe: PipeTransform): Pedido[] {
    return this.pedidos.filter((pedido) => {
      const term = text.toLowerCase();
      return (
        (
        pedido.cliente.nome.toLowerCase().includes(term) ||
        pedido.funcionario.nome.toLowerCase().includes(term) ||
        pipe.transform(pedido.valorTotal).includes(term) ||
        pipe.transform(pedido.id).includes(term)) &&
        ((!this.switchEstado.value) || (pedido.dataConclusao === null && this.switchEstado.value))
      );
    });
  }
  filtrarEstado() {
    this.filter.setValue(this.filter.value);

  }
}
