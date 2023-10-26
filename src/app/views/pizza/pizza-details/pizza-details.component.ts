import { DecimalPipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/models/pizza/pizza';
import { Sabor } from 'src/app/models/sabor/sabor';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss'],
  providers: [DecimalPipe],

})
export class PizzaDetailsComponent implements OnInit{
  @Output() pizzaSelecionada = new EventEmitter<Pizza>();
  pizza = new Pizza();
  disabled!: boolean;
  isErro!: boolean;
  mensagem: string = '';
  router = inject(Router);
  modalService = inject(NgbModal);
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pizza.sabores = [] 
  }
  // modal
  abrirModal(template: any) {
    this.modalService.open(template, { size: 'lg' });
  }
  definirSabor(saborSelecionado: Sabor) {
    this.modalService.dismissAll()
    this.pizza.sabores.push(saborSelecionado)
  }

  //utils

  retirarSabor(index: number){
    this.pizza.sabores.splice(index, 1)
  }
  confirmar(){
    this.pizzaSelecionada.emit(this.pizza)
  }
 
 


}
