import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';
import { IngredientesService } from 'src/app/services/ingredientes/ingredientes.service';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.scss'],
  providers: [DecimalPipe],
})
export class IngredienteListComponent implements OnInit {

    ingredientes: Ingrediente[] = [];
    ingrediente$: Ingrediente[] = [];
    ingrediente = new Ingrediente();
    index!: number;
    service = inject(IngredientesService);
    router = inject(Router);
    isErro!: boolean;
    mensagem: string = '';
    filter = new FormControl('');
    switchEstado = new FormControl(false);
    decimalPipe = inject(DecimalPipe);
    constructor() {this.getAll()}
  
    async ngOnInit() {
      
      let url = this.router.url;
      
      setTimeout(() => {
        this.filter.valueChanges
          .pipe(
            startWith(''),
            map((text) => this.search(text as string, this.decimalPipe))
          )
          .subscribe({
            next: (ingredientesFiltrados) => {
              this.ingrediente$ = ingredientesFiltrados;
            },
          });
      }, 1000);
      
    }
    
    search(text: string, pipe: PipeTransform): Ingrediente[] {
      return this.ingredientes.filter((ingrediente) => {
        const term = text.toLowerCase();
        return (
          (ingrediente.nome.toLowerCase().includes(term) ||
            ingrediente.quantidade.includes(term) ||
            pipe.transform(ingrediente.id).includes(term)) &&
          (!this.switchEstado.value ||
            (ingrediente.delecao === null && this.switchEstado.value))
        );
      });
    }
  
    async getAll() {
      this.service.getAll().subscribe({
        next: (ingredientes) => {
          this.ingredientes = ingredientes;
        },
        error: (erro) => {
          console.log(erro.error);
        },
      });
    }
   
  
    editar(id: number) {
      this.router.navigate(['/web/ingrediente/editar', id]);
    }
  
    deletar(id: number) {
      this.router.navigate(['/web/ingrediente/toggle', id]);
    }
    filtrarEstado() {
      this.filter.setValue(this.filter.value);
    }
}


