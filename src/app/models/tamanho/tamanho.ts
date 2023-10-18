import { AbstractEntity } from "../abstract-entity/abstract-entity";

export class Tamanho extends AbstractEntity {
  nome!: string;
  valor!: number;
  maximoSabores!: number;
}
