import { Component, inject } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule, RouterLink, Router } from '@angular/router';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoas-details',
  templateUrl: './pessoas-details.component.html',
  styleUrls: ['./pessoas-details.component.scss'],
  /*
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, RouterLink]
  */
})
export class PessoasDetailsComponent {
pessoa!: Pessoa;
pessoas : Pessoa[] = [];
index! : number;
service = inject(PessoaService);

constructor(){

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

getAll(){
  this.service.getAll().subscribe({
    next: (pessoas) => {
      this.pessoas = pessoas;
    },
    error: (erro) => {
      console.log(erro.error);
    },
  });
}


}
