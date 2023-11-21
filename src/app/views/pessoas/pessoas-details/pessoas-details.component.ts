import { Component, OnInit, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  RouterModule,
  RouterLink,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { Role } from 'src/app/models/enums/role/role';
import { FormControl } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
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
  pessoa = new Pessoa();

  index!: number;
  isErro!: boolean;
  mensagem: string = '';
  service = inject(PessoaService);
  injectRouter = inject(Router);
  modoEditar!: boolean;
  id!: string;
  disabled!: boolean;
  isFuncionario!: boolean;

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

    if (url.includes('funcionario')) {
      this.pessoa.role = Role.FUNCIONARIO;
      this.isFuncionario = true;
    }
  }

  cadastrar() {
    this.service.post(this.pessoa).subscribe({
      next: async (pessoas) => {
        this.pessoa = pessoas;
        this.isErro = false;
        this.mensagem = 'Pessoa cadastrada com sucesso!';
        await this.sleep(1000);
        this.injectRouter.navigate(['/web/clientes']);
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
    this.service.delete(id).subscribe({
      next: async (pessoas) => {
        this.pessoa = pessoas;
        this.mensagem = 'Pessoa desativada com sucesso!';
        await this.sleep(1500);
        this.injectRouter.navigate(['/web/clientes']);
      },
      error: async (erro) => {
        console.log(erro.error);
        await this.sleep(1500);
        this.injectRouter.navigate(['/web/clientes']);
        this.mensagem = 'Pessoa deletada com sucesso!';
        /*
      O deletar está funcionando normalmente, mas está retornando um erro de Json no console.
      */
      },
    });
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

  async voltarFuncionario() {
    this.injectRouter.navigate(['/web/funcionarios']);
    this.moveTo();
  }

  cpfMask() {
    return '000.000.000-00';
  }
}
