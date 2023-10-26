import { DecimalPipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  PipeTransform,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, RouterModule, RouterLink } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { map, startWith } from 'rxjs';
import { TipoPessoa } from 'src/app/models/enums/tipo-pessoa/tipo-pessoa';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss'],
  providers: [DecimalPipe],
})
export class PessoasListComponent implements OnInit {
  @Output() pessoaSelecionada = new EventEmitter<Pessoa>();
  @Input() isModal: boolean = false;
  @Input() isCliente: boolean = true;
  pessoas: Pessoa[] = [];
  pessoas$: Pessoa[] = [];
  pessoa = new Pessoa();
  index!: number;
  service = inject(PessoaService);
  router = inject(Router);
  isFuncionario!: boolean;
  isErro!: boolean;
  mensagem: string = '';
  filter = new FormControl('');
  decimalPipe = inject(DecimalPipe);
  switchEstado = new FormControl(false);
  constructor() {}

  async ngOnInit() {
    if (this.isModal) {
      this.switchEstado.setValue(true);
    }
    let url = this.router.url;
    if (url.includes('funcionario') || this.isCliente == false) {
      this.isFuncionario = true;
      await this.getAllFuncionarios();
    } else if(url.includes('cliente') || this.isCliente == true){
      this.isFuncionario = false;
      await this.getAllClientes();
    }
    setTimeout(() => {
      this.filter.valueChanges
        .pipe(
          startWith(''),
          map((text) => this.search(text as string, this.decimalPipe))
        )
        .subscribe({
          next: (pessoasFiltradas) => {
            this.pessoas$ = pessoasFiltradas;
          },
        });
    }, 1000);
  }
  search(text: string, pipe: PipeTransform): Pessoa[] {
    return this.pessoas.filter((pessoa) => {
      const term = text.toLowerCase();
      return (
        (pessoa.nome.toLowerCase().includes(term) ||
          pessoa.telefone.toLowerCase().includes(term) ||
          pessoa.cpf.toLowerCase().includes(term) ||
          pipe.transform(pessoa.id).includes(term)) &&
        (!this.switchEstado.value ||
          (pessoa.delecao === null && this.switchEstado.value))
      );
    });
  }

  async getAll() {
    this.service.getAll().subscribe({
      next: (pessoas) => {
        this.pessoas = pessoas;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }
  async getAllClientes() {
    this.service.getAllClientes().subscribe({
      next: (pessoas) => {
        this.pessoas = pessoas;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }
  async getAllFuncionarios() {
    this.service.getAllFuncionarios().subscribe({
      next: (pessoas) => {
        this.pessoas = pessoas;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }

  editar(id: number) {
    this.router.navigate(['/web/pessoa/editar', id]);
  }

  toggle(id: number) {
    this.router.navigate(['/web/pessoa/toggle', id]);
  }
  filtrarEstado() {
    this.filter.setValue(this.filter.value);
  }
  selecionar(pessoa: Pessoa) {
    if (this.isModal) {
      this.pessoaSelecionada.emit(pessoa);
    }else{
      if(this.pessoa.tipoPessoa == TipoPessoa.CLIENTE){
        this.router.navigate(['/web/cliente/', pessoa.id])
      }else{
        this.router.navigate(['/web/funcionario/', pessoa.id])
      }
    }
  }
}
