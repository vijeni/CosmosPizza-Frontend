import { DecimalPipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from 'src/app/models/pizza/pizza';
import { Sabor } from 'src/app/models/sabor/sabor';
import { Tamanho } from 'src/app/models/tamanho/tamanho';

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
  modalRef!: NgbModalRef;


  ngOnInit() {
    this.pizza.sabores = [] 
  }
  // modal
  abrirModal(template: any) {
    this.modalRef = this.modalService.open(template, { size: 'lg' });
  }
  abrirModalSabores(template: any) {
    if(!this.pizza.tamanho){
      alert("Escolha o tamanho primeiro!")
    } else if(this.pizza.tamanho && this.pizza.tamanho.maximoSabores <= this.pizza.sabores.length){
      alert("Quantidade máxima de sabores escolhida!")
    }else{
      this.modalRef = this.modalService.open(template, { size: 'lg' });
    }
  }
  definirTamanho(tamanhoSelecionado: Tamanho) {
    this.modalRef.dismiss();
    this.pizza.tamanho = tamanhoSelecionado;
  }
  definirSabor(saborSelecionado: Sabor) {
    this.modalRef.dismiss()
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
