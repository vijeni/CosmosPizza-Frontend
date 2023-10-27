import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import Produto from 'src/app/models/produto/produto';
import { NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss'],
})
export class ProdutoDetailsComponent implements OnInit {
  disabled!: boolean;
  id!: string;
  modoEditar!: boolean;
  isErro!: boolean;
  mensagem: string = '';
  produto = new Produto();
  router = inject(Router);
  service = inject(ProdutoService);
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
      next: (produto) => {
        this.produto = produto;
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
    console.log(this.produto);
  }

  cadastrar() {
    this.service.post(this.produto).subscribe({
      next: (produto) => {
        this.isErro = false;
        this.mensagem = 'Produto cadastrado com sucesso!';
        this.voltar(1000)
        
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
  }

  voltar(ms: number){
    this.moveTo()
    setTimeout(() =>{
      this.router.navigate(['/web/produtos'])
    }, ms)
  }
  moveTo() {
    window.scrollTo(0, 0);
  }

  editar() {
    this.service.put(this.produto.id, this.produto).subscribe({
      next: (produto) => {
        this.isErro = false;
        this.mensagem = 'Produto editado com sucesso!';
        this.produto = produto;
        this.voltar(800)        
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
  }
  toggleProduto() {
    if (this.produto.delecao != null) {
      if (confirm(`Confirma a ativação do produto ${this.produto.id}?`)) {
        this.service.ativar(this.produto.id).subscribe({
          next: (produto) => {
            this.produto = produto;
            this.isErro = false;
            this.mensagem = 'Produto ativado com sucesso!';
          },
          error: (resposta) => {
            this.isErro = true;
            this.mensagem = resposta.error;
          },
        });
      }
    } else {
      if (confirm(`Confirma a desativação do produto ${this.produto.id}?`)) {
        this.service.desativar(this.produto.id).subscribe({
          next: (produto) => {
            this.produto = produto;
            this.isErro = true;
            this.mensagem = 'Produto desativado com sucesso!';
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
