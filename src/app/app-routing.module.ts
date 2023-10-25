import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './core/index/index.component';
import { PedidosListComponent } from './views/pedidos/pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './views/pedidos/pedidos-details/pedidos-details.component';
import { ProdutoListComponent } from './views/produto/produto-list/produto-list.component';
import { PessoasListComponent } from './views/pessoas/pessoas-list/pessoas-list.component';
import { PessoasDetailsComponent } from './views/pessoas/pessoas-details/pessoas-details.component';
import { ProdutoDetailsComponent } from './views/produto/produto-details/produto-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  {
    path: 'web',
    component: IndexComponent,
    children: [
      { path: 'pedidos', component: PedidosListComponent },
      {
        path: 'pedido',
        component: PedidosDetailsComponent,
        children: [
          { path: 'novo', component: PedidosDetailsComponent },
          { path: 'editar/:id', component: PedidosDetailsComponent },
          { path: 'cancelar/:id', component: PedidosDetailsComponent },
          { path: ':id', component: PedidosDetailsComponent },
        ],
      },
      { path: 'produtos', component: ProdutoListComponent },
      { path: 'produto/novo', component: ProdutoDetailsComponent },
      { path: 'produto/editar/:id', component: ProdutoDetailsComponent },
      { path: 'produto/toggle/:id', component: ProdutoDetailsComponent },
      { path: 'produto/:id', component: ProdutoDetailsComponent },
      { path: 'pessoas', component: PessoasListComponent },
      { path: 'pessoa/novo', component: PessoasDetailsComponent },
      { path: 'pessoa/editar/:id', component: PessoasDetailsComponent},
      { path: 'pessoa/toggle/:id', component: PessoasDetailsComponent},
      { path: 'pessoa/:id', component: PessoasDetailsComponent},
      { path: 'funcionarios', component: PessoasListComponent},
      { path: 'funcionario/novo', component: PessoasDetailsComponent},
      { path: 'funcionario/editar/:id', component: PessoasDetailsComponent},
      { path: 'funcionario/toggle/:id', component: PessoasDetailsComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
