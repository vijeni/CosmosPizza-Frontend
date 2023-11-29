import { AbstractEntity } from '../abstract-entity/abstract-entity';
import { Pagamento } from '../enums/pagamento/pagamento';
import { Status } from '../enums/status/status';
import { Cliente } from '../cliente/cliente';
import { Pizza } from '../pizza/pizza';
import Produto from '../produto/produto';
import { Usuario } from '../usuario/usuario';

export class Pedido extends AbstractEntity {
  cliente!: Cliente;
  funcionario!: Usuario;
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
