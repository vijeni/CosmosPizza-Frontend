import { AbstractEntity } from '../abstract-entity/abstract-entity';
import { Endereco } from '../endereco/endereco';
import { Role } from '../enums/role/role';

export class Pessoa extends AbstractEntity {
  nome!: string;
  cpf!: string;
  telefone!: string;
  endereco!: Endereco;
  role!: Role;

  constructor() {
    super();
    this.nome = '';
    this.cpf = '';
    this.telefone = '';
    this.role = Role.CLIENTE;
    this.endereco = new Endereco();
  }
}
