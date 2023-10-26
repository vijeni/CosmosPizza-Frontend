import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tamanho } from 'src/app/models/tamanho/tamanho';
import { TamanhoService } from 'src/app/services/tamanho/tamanho.service';

@Component({
  selector: 'app-tamanho-details',
  templateUrl: './tamanho-details.component.html',
  styleUrls: ['./tamanho-details.component.scss'],
})
export class TamanhoDetailsComponent implements OnInit{
  tamanho = new Tamanho();

  index!: number;
  isErro!: boolean;
  mensagem: string = '';
  service = inject(TamanhoService);
  injectRouter = inject(Router);
  modoEditar!: boolean;
  id!: string;
  disabled!: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let url = this.injectRouter.url;

    if (!url.includes('novo')) {
      this.id = this.route.snapshot.paramMap.get('id') as string; //pegando a rota
      this.getById(Number(this.id));
      if (url.includes('editar')) {
        this.modoEditar = true;
      } else if (url.includes('toggle')) {
        this.modoEditar = false;
        this.disabled = true;
      } else {
        this.disabled = true;
      }
    }
  }

  cadastrar() {
    this.service.post(this.tamanho).subscribe({
      next: async (tamanho) => {
        this.tamanho = tamanho;
        this.isErro = false;
        this.mensagem = 'Tamanho cadastrado com sucesso!';
        this.voltar(1000);
      },
      error: (erro) => {
        console.log(erro.error);
        this.isErro = true;
        this.mensagem = erro.error;
      },
    });
  }

  editar(id: number) {
    this.service.put(id, this.tamanho).subscribe({
      next: async (tamanho) => {
        this.tamanho = tamanho;
        this.mensagem = 'Tamanho editado com sucesso!';
        this.voltar(800);
      },
      error: (erro) => {
        console.log(erro.error);
        this.mensagem = erro.error;
      },
    });
  }

  deletar(tamanho: Tamanho) {
    if (tamanho.delecao == null) {
      if (confirm(`Confirma desativação do tamanho ${tamanho.nome}?`)) {
        this.service.delete(tamanho.id).subscribe({
          next: async (tamanho) => {
            this.tamanho = tamanho;
            this.mensagem = 'Tamanho desativado com sucesso!';
          },
          error: async (erro) => {
            this.isErro = true;
            this.mensagem = erro.error;
          },
        });
      }
    } else {
      if (confirm(`Confirma a ativação do tamanho ${tamanho.nome}?`)) {
        this.service.ativar(tamanho.id).subscribe({
          next: async (tamanho) => {
            this.tamanho = tamanho;
            this.mensagem = 'Tamanho ativado com sucesso!';
          },
          error: async (erro) => {
            this.isErro = true;
            this.mensagem = erro.error;
          },
        });
      }
    }
  }

  getById(id: number) {
    this.service.findById(id).subscribe({
      next: (tamanho) => {
        this.tamanho = tamanho;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }

  voltar(ms: number) {
    this.moveTo();
    setTimeout(() => {
      this.injectRouter.navigate(['/web/tamanhos']);
    }, ms);
  }
  moveTo() {
    window.scrollTo(0, 0);
  }
}
