import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';
import { Sabor } from 'src/app/models/sabor/sabor';
import { SaborService } from 'src/app/services/sabor/sabor.service';

@Component({
  selector: 'app-sabor-lista',
  templateUrl: './sabor-lista.component.html',
  styleUrls: ['./sabor-lista.component.scss']
})
export class SaborListaComponent implements OnInit {
  sabores : Sabor[] = [];
  sabor = new Sabor();
  index! : number;
  service = inject(SaborService);
  router = inject(Router)
  isFuncionario! : boolean;
  ingredientes : Ingrediente[] = [];
  
  
  constructor() {
    this.getAll();
  }
  
  ngOnInit(): void {
    
  }
  
    getAll(){
      this.service.getAll().subscribe({
        next: (sabores) => {
          this.sabores = sabores;
        },
        error: (erro) => {
          console.log(erro.error);
        },
      });
    }
  
    editar(id: number) {
      this.router.navigate(['/web/sabor/editar', id]);
    }
  
    toggle(id: number) {
      this.router.navigate(['/web/sabor/toggle', id]);
    }
  
    
  
}
