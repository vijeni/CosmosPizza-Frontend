import { AbstractEntity } from "../abstract-entity/abstract-entity";

export class Endereco extends AbstractEntity {
    logradouro!: string
    numero!: number;
    complemento!: string;
    bairro!: string;
    cep!: string
    uf! : string;
    cidade! : string;


    constructor(logradouro?: string, numero?: number, bairro?: string, cep?: string, uf? : string, cidade? : string){
        super();
        this.logradouro = logradouro ? logradouro : "";
        this.numero = numero ? numero : 0;
        this.bairro = bairro? bairro : "";
        this.cep = cep? cep : "";
        this.uf = uf? uf : "";
        this.cidade = cidade? cidade: "";
    }

   

}

export interface EnderecoInterface {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
}
//# sourceMappingURL=endereco.d.ts.map