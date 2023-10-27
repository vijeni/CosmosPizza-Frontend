import { AbstractEntity } from "../abstract-entity/abstract-entity"

export class Ingrediente extends AbstractEntity{
    nome!: string

    constructor(nome? : string, quantidade? : string){
        super();
        this.nome = nome? nome : "";
      }
    
}
