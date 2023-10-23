export class AbstractEntity {
    id!: number;
    cadastro!: Date;
    edicao!: Date;
    delecao!: Date;
    isAtivo : boolean = true;
}
