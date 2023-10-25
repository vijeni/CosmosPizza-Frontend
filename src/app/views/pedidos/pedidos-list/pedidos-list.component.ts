import { DecimalPipe } from '@angular/common';
import {
  Component,
  Directive,
  ElementRef,
  OnInit,
  PipeTransform,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { map, startWith } from 'rxjs';
import Produto from 'src/app/models/produto/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrls: ['./pedidos-list.component.scss'],
  providers: [DecimalPipe]
})
export class PedidosListComponent implements OnInit {
  pedidos: Produto[] = [];
  pedidos$: Produto[] = [];
  isErro!: boolean;
  mensagem: string = '';
  modalService = inject(NgbModal);
  pedidoService = inject(ProdutoService);
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
  async getAllAtivos() {
    this.pedidoService.getAllAtivos().subscribe({
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
  search(text: string, pipe: PipeTransform): Produto[] {
    // if (this.switchEstado.value) {
    //   this.getAllAtivos();
    // } else {
    //   this.getAll();
    // }
    return this.pedidos.filter((produto) => {
      const term = text.toLowerCase();
      return (
        (produto.descricao.toLowerCase().includes(term) ||
        pipe.transform(produto.quantidadeEstoque).includes(term) ||
        pipe.transform(produto.valorUnitario).includes(term) ||
        pipe.transform(produto.id).includes(term)) &&
        ((!this.switchEstado.value) || (produto.delecao === null && this.switchEstado.value))
      );
    });
  }
  filtrarEstado() {
    this.filter.setValue(this.filter.value);

  }
}
