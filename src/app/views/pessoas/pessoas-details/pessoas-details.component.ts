import { Component, OnInit, inject } from '@angular/core';
import {
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Cliente } from 'src/app/models/cliente/cliente';
import { PessoaService } from 'src/app/services/cliente/cliente.service';

import { CEPError, NgxViacepService } from '@brunoc/ngx-viacep'; // Importando o serviço
import { EMPTY, catchError } from 'rxjs';
import { Endereco, EnderecoInterface } from 'src/app/models/endereco/endereco';
import { provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-pessoas-details',
  templateUrl: './pessoas-details.component.html',
  styleUrls: ['./pessoas-details.component.scss'],
  /*
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, RouterLink]
  */
  providers: [provideNgxMask()],
})
export class PessoasDetailsComponent implements OnInit {
  pessoa = new Cliente();

  index!: number;
  isErro!: boolean;
  mensagem: string = '';
  service = inject(PessoaService);
  injectRouter = inject(Router);
  modoEditar!: boolean;
  id!: string;
  disabled!: boolean;

  constructor(
    private viacep: NgxViacepService,
    private route: ActivatedRoute
  ) {}

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
    this.service.post(this.pessoa).subscribe({
      next: async (pessoas) => {
        this.pessoa = pessoas;
        this.isErro = false;
        this.mensagem = 'Pessoa cadastrada com sucesso!';
        this.voltar();
      },
      error: (erro) => {
        console.log(erro.error);
        this.isErro = true;
        this.mensagem = erro.error;
      },
    });
  }

  editar(id: number) {
    this.service.put(id, this.pessoa).subscribe({
      next: async (pessoas) => {
        this.pessoa = pessoas;
        this.mensagem = 'Pessoa editada com sucesso!';
        await this.sleep(1000);
        this.injectRouter.navigate(['/web/clientes']);
      },
      error: (erro) => {
        console.log(erro.error);
        this.mensagem = erro.error;
      },
    });
  }

  deletar(id: number) {
    if (this.pessoa.delecao != null) {
      if (confirm(`Confirma a ativação da pessoa ${this.pessoa.id}?`)) {
        this.service.ativar(this.pessoa.id).subscribe({
          next: (pessoa) => {
            this.pessoa = pessoa;
            this.isErro = false;
            this.mensagem = 'Pessoa ativada com sucesso!';
          },
          error: (resposta) => {
            this.isErro = true;
            this.mensagem = resposta.error;
          },
        });
      }
    } else {
      if (confirm(`Confirma a desativação do produto ${this.pessoa.id}?`)) {
        this.service.delete(this.pessoa.id).subscribe({
          next: (pessoa) => {
            this.pessoa = pessoa;
            this.isErro = true;
            this.mensagem = 'Pessoa desativada com sucesso!';
          },
          error: (resposta) => {
            this.isErro = true;
            this.mensagem = resposta.error;
          },
        });
      }
    }
  }

  getById(id: number) {
    this.service.findById(id).subscribe({
      next: (pessoas) => {
        this.pessoa = pessoas;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }

  viaCep() {
    this.viacep
      .buscarPorCep(this.pessoa.endereco.cep)
      .pipe(
        catchError((error: CEPError) => {
          // Ocorreu algum erro :/
          console.log(error.message);
          return EMPTY;
        })
      )
      .subscribe((endereco: EnderecoInterface) => {
        // Endereço retornado :)
        console.log(endereco);
        this.pessoa.endereco.logradouro = endereco.logradouro;
        this.pessoa.endereco.bairro = endereco.bairro;
        this.pessoa.endereco.cep = endereco.cep;
        this.pessoa.endereco.uf = endereco.uf;
        this.pessoa.endereco.cidade = endereco.localidade;
      });
  }

  moveTo() {
    window.scrollTo(0, 0);
  }

  sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  async voltar() {
    this.injectRouter.navigate(['/web/clientes']);
    this.moveTo();
  }

  cpfMask() {
    return '000.000.000-00';
  }
}
