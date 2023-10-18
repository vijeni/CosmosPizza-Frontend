import { AbstractEntity } from "../abstract-entity/abstract-entity";

export class Endereco extends AbstractEntity {
    logradouro!: string
    numero!: number;
    complemento!: string;
    bairro!: string;
    cep!: string
}
