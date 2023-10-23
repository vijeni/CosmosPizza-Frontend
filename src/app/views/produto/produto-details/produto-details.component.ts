import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import Produto from 'src/app/models/produto/produto';

@Component({
  selector: 'app-produto-details',
  templateUrl: './produto-details.component.html',
  styleUrls: ['./produto-details.component.scss'],
})
export class ProdutoDetailsComponent implements OnInit {
  disabled!: boolean
  id!: string;
  modoEditar!: boolean;
  isErro!: boolean;
  mensagem: string = '';
  produto = new Produto();
  router = inject(Router);
  service = inject(ProdutoService);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let url = this.router.url
    if (!url.includes('novo')) {
      this.id = this.route.snapshot.paramMap.get('id') as string;
      this.findById(Number(this.id));
      if(url.includes('editar')){
        this.modoEditar = true
      }else if(url.includes('delete')){
        this.disabled = true
        this.modoEditar = false
      }else{
        this.disabled = true
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
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
  }

  editar(){
    this.service.put(this.produto.id, this.produto).subscribe({
      next: (produto) => {
        this.isErro = false;
        this.mensagem = 'Produto editado com sucesso!';
      },
      error: (resposta) => {
        this.isErro = true;
        this.mensagem = resposta.error;
      },
    });
  }
  desativar(){
    if(confirm(`Confirma a desativação do produto ${this.produto.id}?`)){
      alert('confirmou')
      this.service.put(this.produto.id, this.produto).subscribe({
        next: (produto) => {
          this.isErro = true;
          console.log(produto)
          this.mensagem = 'Produto desativado com sucesso!';
        },
        error: (resposta) => {
          this.isErro = true;
          this.mensagem = resposta.error;
        },
      });
    }
  }
  btnVoltar(): string{
    if(this.id && this.modoEditar == null){
      return 'Voltar'
    }else{
      return 'Cancelar'

    }
  }
  voltar() {
    this.router.navigate(['/web/produtos']);
  }
}
