import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { TipoPessoa } from 'src/app/models/enums/tipo-pessoa/tipo-pessoa';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss'],

})
export class PessoasListComponent implements OnInit {
pessoas : Pessoa[] = [];
pessoa = new Pessoa();
index! : number;
service = inject(PessoaService);
router = inject(Router)
isFuncionario! : boolean;


constructor() {
  this.getAll();
}

ngOnInit(): void {
  let url = this.router.url;

   
  if(url.includes('funcionario')){
    this.pessoa.tipoPessoa = TipoPessoa.FUNCIONARIO
    this.isFuncionario = true;
  }

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

  editar(id: number) {
    this.router.navigate(['/web/pessoa/editar', id]);
  }

  toggle(id: number) {
    this.router.navigate(['/web/pessoa/toggle', id]);
  }

  

}
