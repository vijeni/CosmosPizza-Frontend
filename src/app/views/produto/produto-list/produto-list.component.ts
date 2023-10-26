import { DecimalPipe } from '@angular/common';
import {
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  PipeTransform,
  ViewChild,
  inject,
} from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, map, pipe, startWith } from 'rxjs';
import Produto from 'src/app/models/produto/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss'],
  providers: [DecimalPipe],
})
export class ProdutoListComponent implements OnInit {
  // comm de modal
  @Output() produtoSelecionado = new EventEmitter<Produto>();
  @Input() isModal: boolean = false;
  produtos: Produto[] = [];
  produtos$: Produto[] = [];
  isErro!: boolean;
  mensagem: string = '';
  modalService = inject(NgbModal);
  produtoService = inject(ProdutoService);
  router = inject(Router);
  filter = new FormControl('');
  decimalPipe = inject(DecimalPipe);
  switchEstado = new FormControl(false);


  constructor() {}
  
  async ngOnInit() {
    this.switchEstado.setValue(true)
    await this.getAll();
    setTimeout(() => {
      this.filter.valueChanges
        .pipe(
          startWith(''),
          map((text) => this.search(text as string, this.decimalPipe))
        )
        .subscribe({
          next: (produtosFiltrados) => {
            this.produtos$ = produtosFiltrados;
          },
        });
    }, 1000);
  }
  
  async getAll() {
    this.produtoService.getAll().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (erro) => {
        this.isErro = true;
        this.mensagem = 'Ocorreu um erro!';
        console.log(erro.error);
      },
    });
  }
  async getAllAtivos() {
    this.produtoService.getAllAtivos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (erro) => {
        this.isErro = true;
        this.mensagem = 'Ocorreu um erro!';
        console.log(erro.error);
      },
    });
  }
  editar(id: number) {
    this.router.navigate(['/web/produto/editar', id]);
  }
  toggle(id: number) {
    this.router.navigate(['/web/produto/toggle', id]);
  }
  search(text: string, pipe: PipeTransform): Produto[] {
    return this.produtos.filter((produto) => {
      const term = text.toLowerCase();
      return (
        (produto.descricao.toLowerCase().includes(term) ||
          pipe.transform(produto.quantidadeEstoque).includes(term) ||
          pipe.transform(produto.valorUnitario).includes(term) ||
          pipe.transform(produto.id).includes(term)) &&
        (!this.switchEstado.value ||
          (produto.delecao === null && this.switchEstado.value))
      );
    });
  }
  filtrarEstado() {
    this.filter.setValue(this.filter.value);
  }
  selecionar(produto: Produto) {
    if (this.isModal) {
      this.produtoSelecionado.emit(produto);
    }else{
      this.router.navigate(['/web/produto', produto.id])
    }
  }
}
