import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Ingrediente } from 'src/app/models/ingrediente/ingrediente';
import { Sabor } from 'src/app/models/sabor/sabor';
import { SaborService } from 'src/app/services/sabor/sabor.service';

@Component({
  selector: 'app-sabor-lista',
  templateUrl: './sabor-lista.component.html',
  styleUrls: ['./sabor-lista.component.scss'],
})
export class SaborListaComponent implements OnInit {
  sabores: Sabor[] = [];
  sabores$: Sabor[] = [];
  sabor = new Sabor();
  index!: number;
  service = inject(SaborService);
  router = inject(Router);
  isFuncionario!: boolean;
  isErro!: boolean;
  mensagem: string = '';
  filter = new FormControl('');
  switchEstado = new FormControl(false);
  decimalPipe = inject(DecimalPipe);

  constructor() {
  }

  async ngOnInit() {
    this.switchEstado.setValue(true)
    await this.getAll();
    setTimeout(() => {
      this.filter.valueChanges
        .pipe(
          startWith(''),
          map((text) => this.search(text as string, this.decimalPipe))
        )
        .subscribe({
          next: (saboresFiltrados) => {
            this.sabores$ = saboresFiltrados;
          },
        });
    }, 1000);
  }

  async getAll() {
    this.service.getAll().subscribe({
      next: (sabores) => {
        this.sabores = sabores;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }
  filtrarEstado() {
    this.filter.setValue(this.filter.value);
  }
  editar(id: number) {
    this.router.navigate(['/web/sabor/editar', id]);
  }

  toggle(id: number) {
    this.router.navigate(['/web/sabor/toggle', id]);
  }

  search(text: string, pipe: PipeTransform): Sabor[] {
    return this.sabores.filter((sabor) => {
      const term = text.toLowerCase();
      return (
        sabor.nome.toLowerCase().includes(term) ||
        sabor.descricao.toLowerCase().includes(term) ||
        pipe.transform(sabor.id).includes(term) &&
        (!this.switchEstado.value ||
          (sabor.delecao === null && this.switchEstado.value))
      );
    });
  }
}
