import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './core/index/index.component';
import { PedidosListComponent } from './views/pedidos/pedidos-list/pedidos-list.component';
import { PedidosDetailsComponent } from './views/pedidos/pedidos-details/pedidos-details.component';
import { ProdutoListComponent } from './views/produto/produto-list/produto-list.component';
import { PessoasListComponent } from './views/pessoas/pessoas-list/pessoas-list.component';
import { PessoasDetailsComponent } from './views/pessoas/pessoas-details/pessoas-details.component';
import { ProdutoDetailsComponent } from './views/produto/produto-details/produto-details.component';
import { SaborListaComponent } from './views/sabor/sabor-lista/sabor-lista.component';
import { SaborDetailsComponent } from './views/sabor/sabor-details/sabor-details.component';
import { IngredienteListComponent } from './views/ingredientes/ingrediente-list/ingrediente-list.component';
import { IngredientesDetailsComponent } from './views/ingredientes/ingredientes-details/ingredientes-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  {
    path: 'web',
    component: IndexComponent,
    children: [
      { path: 'pedidos', component: PedidosListComponent },
      { path: 'pedido/novo', component: PedidosDetailsComponent },
      { path: 'pedido/editar/:id', component: PedidosDetailsComponent },
      { path: 'pedido/cancelar/:id', component: PedidosDetailsComponent },
      { path: 'pedido/:id', component: PedidosDetailsComponent },
      { path: 'produtos', component: ProdutoListComponent },
      { path: 'produto/novo', component: ProdutoDetailsComponent },
      { path: 'produto/editar/:id', component: ProdutoDetailsComponent },
      { path: 'produto/toggle/:id', component: ProdutoDetailsComponent },
      { path: 'produto/:id', component: ProdutoDetailsComponent },
      { path: 'clientes', component: PessoasListComponent },
      { path: 'cliente/novo', component: PessoasDetailsComponent },
      { path: 'cliente/:id', component: PessoasDetailsComponent },
      { path: 'funcionarios', component: PessoasListComponent },
      { path: 'funcionario/novo', component: PessoasDetailsComponent },
      { path: 'pessoa/editar/:id', component: PessoasDetailsComponent },
      { path: 'pessoa/toggle/:id', component: PessoasDetailsComponent },
      { path: 'sabores', component: SaborListaComponent },
      { path: 'sabor/novo', component: SaborDetailsComponent },
      { path: 'sabor/editar/:id', component: SaborDetailsComponent },
      { path: 'sabor/toggle/:id', component: SaborDetailsComponent },
      { path: 'sabor/:id', component: SaborDetailsComponent },
      { path: 'ingredientes', component: IngredienteListComponent},
      { path: 'ingrediente/novo', component: IngredientesDetailsComponent},
      { path: 'ingrediente/editar/:id', component: IngredientesDetailsComponent},
      { path: 'ingrediente/toggle/:id', component: IngredientesDetailsComponent},
      { path: 'ingrediente/:id', component: IngredientesDetailsComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
