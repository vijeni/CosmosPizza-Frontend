import { AbstractEntity } from "../abstract-entity/abstract-entity";
import { Role } from "../enums/role/role";

export class Usuario extends AbstractEntity {
    username!: string
    password!: string
    role!: Role
    cpf!: string
    token!: string
}
