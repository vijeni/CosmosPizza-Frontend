import { AbstractEntity } from '../abstract-entity/abstract-entity';
import { Pagamento } from '../enums/pagamento/pagamento';
import { Status } from '../enums/status/status';
import { Pessoa } from '../pessoa/pessoa';
import { Pizza } from '../pizza/pizza';
import Produto from '../produto/produto';

export class Pedido extends AbstractEntity {
  cliente!: Pessoa;
  funcionario!: Pessoa;
  status!: Status;
  entrega!: boolean;
  valorPedido!: number;
  dataAbertura!: Date;
  dataConclusao!: Date;
  valorEntrega!: number;
  valorTotal!: number;
  formaPagamento!: Pagamento;
  produtos!: Produto[];
  pizzas!: Pizza[];
}
