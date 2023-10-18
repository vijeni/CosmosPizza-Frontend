import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { Sabor } from "../sabor/sabor";
import { Tamanho } from "../tamanho/tamanho";

export class Pizza extends AbstractEntity {
    sabores!: Sabor[];
    tamanho!: Tamanho;
    observacao!: string;    
}
