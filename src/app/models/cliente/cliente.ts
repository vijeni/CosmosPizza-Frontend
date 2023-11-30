import { AbstractEntity } from '../abstract-entity/abstract-entity';
import { Endereco } from '../endereco/endereco';
import { Role } from '../enums/role/role';

export class Cliente extends AbstractEntity {
  nome!: string;
  cpf!: string;
  telefone!: string;
  endereco!: Endereco;

  constructor() {
    super();
    this.nome = '';
    this.cpf = '';
    this.telefone = '';
    this.endereco = new Endereco();
  }
}
