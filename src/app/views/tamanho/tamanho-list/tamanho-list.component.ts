import { DecimalPipe } from '@angular/common';
import { Component, OnInit, PipeTransform, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { map, startWith } from 'rxjs';
import { Tamanho } from 'src/app/models/tamanho/tamanho';
import { TamanhoService } from 'src/app/services/tamanho/tamanho.service';

@Component({
  selector: 'app-tamanho-list',
  templateUrl: './tamanho-list.component.html',
  styleUrls: ['./tamanho-list.component.scss'],
})
export class TamanhoListComponent implements OnInit {
  tamanhos: Tamanho[] = [];
  tamanho$: Tamanho[] = [];
  tamanho = new Tamanho();
  index!: number;
  service = inject(TamanhoService);
  router = inject(Router);
  isErro!: boolean;
  mensagem: string = '';
  filter = new FormControl('');
  switchEstado = new FormControl(false);
  decimalPipe = inject(DecimalPipe);
  constructor() {}

  async ngOnInit() {
    this.switchEstado.setValue(true);
    await this.getAll();
    setTimeout(() => {
      this.filter.valueChanges
        .pipe(
          startWith(''),
          map((text) => this.search(text as string, this.decimalPipe))
        )
        .subscribe({
          next: (tamanhosFiltrados) => {
            this.tamanho$ = tamanhosFiltrados;
          },
        });
    }, 1000);
  }

  search(text: string, pipe: PipeTransform): Tamanho[] {
    console.log(this.tamanho$.length)
    return this.tamanhos.filter((tamanho) => {
      const term = text.toLowerCase();
      return (
        (tamanho.nome.toLowerCase().includes(term) ||
          pipe.transform(tamanho.maximoSabores).includes(term) ||
          pipe.transform(tamanho.valor).includes(term) ||
          pipe.transform(tamanho.id).includes(term)) &&
        (!this.switchEstado.value ||
          (tamanho.delecao === null && this.switchEstado.value))
      );
    });
  }

  async getAll() {
    this.service.getAll().subscribe({
      next: (tamanhos) => {
        this.tamanhos = tamanhos;
      },
      error: (erro) => {
        console.log(erro.error);
      },
    });
  }

  editar(id: number) {
    this.router.navigate(['/web/tamanho/editar', id]);
  }

  toggle(id: number) {
    this.router.navigate(['/web/tamanho/toggle', id]);
  }
  filtrarEstado() {
    this.filter.setValue(this.filter.value);
  }
}
