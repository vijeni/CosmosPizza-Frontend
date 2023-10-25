import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from 'src/app/models/pessoa/pessoa';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss'],

})
export class PessoasListComponent {
pessoas : Pessoa[] = [];
index! : number;
service = inject(PessoaService);
router = inject(Router)

constructor() {
  this.getAll();
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
