import { AbstractEntity } from '../abstract-entity/abstract-entity';
import { Ingrediente } from '../ingrediente/ingrediente';

export class Sabor extends AbstractEntity {
  nome!: string;
  descricao!: string;
  ingredientes!: Ingrediente[];


  constructor(nome? : string, descricao?: string, ingredientes? : Ingrediente[]){
    super();
    this.nome = nome? nome : "";
    this.descricao = descricao?  descricao :"";
    this.ingredientes = new Array<Ingrediente>(); 
  }


}

