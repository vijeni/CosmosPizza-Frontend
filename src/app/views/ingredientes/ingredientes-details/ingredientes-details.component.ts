import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';
import { IngredientesService } from 'src/app/services/ingredientes/ingredientes.service';

@Component({
  selector: 'app-ingredientes-details',
  templateUrl: './ingredientes-details.component.html',
  styleUrls: ['./ingredientes-details.component.scss'],
})
export class IngredientesDetailsComponent implements OnInit {
  ingrediente = new Ingrediente();

  index!: number;
  isErro!: boolean;
  mensagem: string = '';
  service = inject(IngredientesService);
  injectRouter = inject(Router);
  modoEditar!: boolean;
  id!: string;
  disabled!: boolean;
  isFuncionario!: boolean;

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
    this.service.post(this.ingrediente).subscribe({
      next: async (ingrediente) => {
        this.ingrediente = ingrediente;
        this.isErro = false;
        this.mensagem = 'Ingrediente cadastrado com sucesso!';
        await this.sleep(1000);
        this.injectRouter.navigate(['/web/ingredientes']);
      },
      error: (erro) => {
        console.log(erro.error);
        this.isErro = true;
        this.mensagem = erro.error;
      },
    });
  }

  editar(id: number) {
    this.service.put(id, this.ingrediente).subscribe({
      next: async (pessoas) => {
        this.ingrediente = pessoas;
        this.mensagem = 'Ingrediente editado com sucesso!';
        await this.sleep(1000);
        this.injectRouter.navigate(['/web/ingredientes']);
      },
      error: (erro) => {
        console.log(erro.error);
        this.mensagem = erro.error;
      },
    });
  }

  deletar() {
    if (this.ingrediente.delecao == null) {
      if (
        confirm(`Confirma desativação do ingrediente ${this.ingrediente.nome}?`)
      ) {
        this.service.desativar(this.ingrediente.id).subscribe({
          next: async (ingrediente) => {
            this.ingrediente = ingrediente;
            this.mensagem = 'Ingrediente desativado com sucesso!';
          },
          error: async (erro) => {
            this.isErro = true;
            this.mensagem = erro.error;
          },
        });
      }
    } else {
      if (confirm(`Confirma a ativação do tamanho ${this.ingrediente.nome}?`)) {
        this.service.ativar(this.ingrediente.id).subscribe({
          next: async (ingrediente) => {
            this.ingrediente = ingrediente;
            this.mensagem = 'Ingrediente ativado com sucesso!';
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
      next: (ingrediente) => {
        this.ingrediente = ingrediente;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }

  moveTo() {
    window.scrollTo(0, 0);
  }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async voltar() {
    this.injectRouter.navigate(['/web/ingredientes']);
    this.moveTo();
  }
}
