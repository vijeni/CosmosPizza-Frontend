import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './core/index/index.component';
import { PedidosListComponent } from './views/pedidos/pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './views/pedidos/pedidos-details/pedidos-details.component';
import { ProdutoListComponent } from './views/produto/produto-list/produto-list.component';
import { PessoasListComponent } from './views/pessoas/pessoas-list/pessoas-list.component';
import { PessoasDetailsComponent } from './views/pessoas/pessoas-details/pessoas-details.component';

const routes: Routes = [
  {path: "",  redirectTo: "web", pathMatch: "full"},
  {path: "web",  component: IndexComponent, children: [
    {path: "pedidos", component: PedidosListComponent},
    {path: "pedido", component: PedidosDetailsComponent, children:[
      {path: "novo", component: PedidosDetailsComponent},
      {path: "editar/:id", component: PedidosDetailsComponent},
      {path: "cancelar/:id", component: PedidosDetailsComponent},
      {path: ":id", component: PedidosDetailsComponent}
    ]},
    {path: "produtos", component: ProdutoListComponent},
    {path: "produto", component: ProdutoListComponent, children: [
      {path: "novo", component: ProdutoListComponent},
      {path: "editar/:id", component: ProdutoListComponent},
      {path: "cancelar/:id", component: ProdutoListComponent},
      {path: ":id", component: ProdutoListComponent},
    ]},
    {path: "pessoas", component: PessoasListComponent, children: [
      {path: "novo", component: PessoasDetailsComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
