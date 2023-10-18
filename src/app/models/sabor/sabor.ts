import { AbstractEntity } from '../abstract-entity/abstract-entity';
import { Ingrediente } from '../ingrediente/ingrediente';

export class Sabor extends AbstractEntity {
  nome!: string;
  descricao!: string;
  ingredientes!: Ingrediente[];
}
