import { Component, OnInit, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';
import { TipoPessoa } from 'src/app/models/enums/tipo-pessoa/tipo-pessoa';
import { FormControl } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { CEPError, NgxViacepService } from "@brunoc/ngx-viacep"; // Importando o serviço
import { EMPTY, catchError } from 'rxjs';
import { Endereco, EnderecoInterface } from 'src/app/models/endereco/endereco';


@Component({
  selector: 'app-pessoas-details',
  templateUrl: './pessoas-details.component.html',
  styleUrls: ['./pessoas-details.component.scss'],
  /*
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, RouterLink]
  */
})
export class PessoasDetailsComponent implements OnInit  {
pessoa= new Pessoa(); 


index! : number;
service = inject(PessoaService);

constructor(private viacep: NgxViacepService){


}

ngOnInit(): void {
  
}

cadastrar(){
  this.service.post(this.pessoa).subscribe({
    next: (pessoas) => {
      this.pessoa = pessoas;
    },
    error: (erro) => {
      console.log(erro.error);
    },
  });
}

editar(){
  this.service.put(this.index,this.pessoa).subscribe({
    next: (pessoas) => {
      this.pessoa = pessoas;
    },
    error: (erro) => {
      console.log(erro.error);
    },
  });
}

deletar(){
  this.service.delete(this.index).subscribe({
    next: (pessoas) => {
      this.pessoa = pessoas;
    },
    error: (erro) => {
      console.log(erro.error);
    },
  });
}

getById(){
  this.service.findById(this.index).subscribe({
    next: (pessoas) => {
      this.pessoa = pessoas;
    },
    error: (erro) => {
      console.log(erro.error);
    },
  });
}

viaCep(){
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



}
