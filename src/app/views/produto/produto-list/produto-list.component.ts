import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Produto from 'src/app/models/produto/produto';
import { ProdutoService } from 'src/app/services/produto/produto.service';
@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent {
  produtos: Produto[] = [];
  index!: number;
  produtoSelecionado = new Produto;
  isErro!: boolean;
  mensagem: string = '';
  modalService = inject(NgbModal);
  produtoService = inject(ProdutoService);

  constructor() {
    this.getAll();
  }
  getAll() {
    this.produtoService.getAll().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }
}
