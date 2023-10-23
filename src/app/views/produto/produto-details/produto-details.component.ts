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
  id!: string;
  modo!: boolean;
  isErro!: boolean;
  mensagem: string = '';
  produto = new Produto();
  router = inject(Router);
  service = inject(ProdutoService);
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    if (!this.router.url.includes('novo')) {
      this.id = this.route.snapshot.paramMap.get("id") as string;
      console.log(this.id)
      this.findById(Number(this.id));
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

  voltar() {
    this.router.navigate(['/web/produtos']);
  }
}
