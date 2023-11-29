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
import { PizzaDetailsComponent } from './views/pizza/pizza-details/pizza-details.component';
import { TamanhoListComponent } from './views/tamanho/tamanho-list/tamanho-list.component';
import { TamanhoDetailsComponent } from './views/tamanho/tamanho-details/tamanho-details.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { IngredientesDetailsComponent } from './views/ingredientes/ingredientes-details/ingredientes-details.component';
import { LoginComponent } from './core/login/login.component';
import { rotasGuard } from './guards/rotas.guard';
import { UsuariosListarComponent } from './views/usuarios/usuarios-listar/usuarios-listar.component';

const routes: Routes = [
  { path: '', redirectTo: 'web', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [rotasGuard] },
  {
    path: 'web',
    component: IndexComponent,
    canActivate: [rotasGuard],
    data: { isAdmin: false },
    children: [
      {
        path: '',
        component: PedidosListComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'pedidos',
        component: PedidosListComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'pedido/novo',
        component: PedidosDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'pedido/editar/:id',
        component: PedidosDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'pedido/cancelar/:id',
        component: PedidosDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'pedido/:id',
        component: PedidosDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'produtos',
        component: ProdutoListComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'produto/novo',
        component: ProdutoDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'produto/editar/:id',
        component: ProdutoDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'produto/toggle/:id',
        component: ProdutoDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'produto/:id',
        component: ProdutoDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'clientes',
        component: PessoasListComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'cliente/novo',
        component: PessoasDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'cliente/:id',
        component: PessoasDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'funcionarios',
        component: UsuariosListarComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'cliente/editar/:id',
        component: PessoasDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'cliente/toggle/:id',
        component: PessoasDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'sabores',
        component: SaborListaComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'sabor/novo',
        component: SaborDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'sabor/editar/:id',
        component: SaborDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'sabor/toggle/:id',
        component: SaborDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'sabor/:id',
        component: SaborDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'ingredientes',
        component: IngredienteListComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'ingrediente/novo',
        component: IngredientesDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'ingrediente/editar/:id',
        component: IngredientesDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'ingrediente/toggle/:id',
        component: IngredientesDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'ingrediente/:id',
        component: IngredientesDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'pizza/novo',
        component: PizzaDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'tamanhos',
        component: TamanhoListComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'tamanho/novo',
        component: TamanhoDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'tamanho/editar/:id',
        component: TamanhoDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'tamanho/toggle/:id',
        component: TamanhoDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: true },
      },
      {
        path: 'tamanho/:id',
        component: TamanhoDetailsComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [rotasGuard],
        data: { isAdmin: false },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
