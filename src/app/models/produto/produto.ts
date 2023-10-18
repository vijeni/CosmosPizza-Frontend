import { AbstractEntity } from "../abstract-entity/abstract-entity";

export default class Produto extends AbstractEntity{
  nome!: string;
  quantidadeEstoque!: number;
  descricao!: string;
  valorUnitario!: number;
}
