import { AbstractEntity } from "../abstract-entity/abstract-entity";

export default class Produto extends AbstractEntity{
  quantidadeEstoque!: number;
  descricao!: string;
  observacao!: string;
  valorUnitario!: number;
}
