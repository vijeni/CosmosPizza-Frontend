import { Component, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';
import { IngredientesService } from 'src/app/services/ingredientes/ingredientes.service';

@Component({
  selector: 'app-ingrediente-list',
  templateUrl: './ingrediente-list.component.html',
  styleUrls: ['./ingrediente-list.component.scss']
})
export class IngredienteListComponent {

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
    constructor(
      
    ) {this.getAll();}
  
    async ngOnInit() {
      let url = this.router.url;
      /*
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
      */
    }
    /*
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
  */
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


